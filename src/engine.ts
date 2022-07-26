import { join, relative, dirname } from 'path';
import { Engine as BaseEngine } from 'basic-kodyfire';
const fs = require('fs');
const fsPromises = fs.promises;
const puppeteer = require("puppeteer");
const GIFEncoder = require('gifencoder');
const PNG = require('png-js');

// Wrap your builder in a class that implements the IBuilder interface
import * as builder from 'handlebars';

const sizeMap = {
  facebook: { width: 1200, height: 630 },
  twitter: { width: 1200, height: 630 },
  "ig-landscape": { width: 1080, height: 608 },
  "ig-square": { width: 1080, height: 1080 },
  "ig-portrait": { width: 1080, height: 1350 },
  "ig-story": { width: 1080, height: 1920 },
  pinterest: { width: 1000, height: 1500 }
};

export class Engine extends BaseEngine {
  builder: any;
  constructor() {
    super();
    this.builder = builder;
  }

  async decode(png: any) {
    return new Promise(r => {png.decode((pixels:any) => r(pixels))});
  }
  
  async gifAddFrame(page:any, encoder: any, width: any, height: any) {
    // Get root of page
    const pageFrame = page.mainFrame();
    const rootHandle = await pageFrame.$("body");

    // Take screenshot
    // @ts-ignore
    const pngBuffer = await rootHandle.screenshot({
      clip: { width, height, x: 0, y: 0 },
      omitBackground: true
    });

    const png = new PNG(pngBuffer);
    await this.decode(png).then(pixels => encoder.addFrame(pixels));
  }

  async read(path: string, templateName: any) {
    if (fs.existsSync(join(path, templateName))) {
      const template = await fsPromises.readFile(join(path, templateName));
      return template?.toString();
    }
    const template = await fsPromises.readFile(
      join(relative(process.cwd(), __dirname), path, templateName)
    );
    return template?.toString();
  }

  async getPartial(path: string, template: string, data: any) {
    const tpl = await this.read(path, template);

    const compiled = await this.compile(tpl, data);
    return compiled;
  }

  compile(template: any, data: any) {
    const tpl = this.builder.compile(template);
    return tpl(data);
  }
  async create(
    rootDir: string,
    outputDir: string,
    filename: any,
    content: string | Buffer
  ) {
    await fsPromises.writeFile(join(rootDir, outputDir, filename), content);
  }
  async overwrite(
    rootDir: string,
    outputDir: string,
    filename: any,
    content: string | Buffer
  ) {
    await fsPromises.writeFile(join(rootDir, outputDir, filename), content);
  }

  async createOrOverwriteImage(
    rootDir: string,
    outputDir: string,
    filename: any,
    content: string | Buffer,
    size = "twitter",
    debug = true,
    // @todo allow to overwrite
    overwrite = false
  ) {
    filename = join(rootDir, outputDir, filename);
    // @todo allow to overwrite
    if (!overwrite) {
      content = this.setContent(filename, content);
    }
    // We need to create the directory if it doesn't exist
    await fsPromises.mkdir(dirname(filename), { recursive: true });
    const browser = await puppeteer.launch({
      headless: true, slowMo: 0
    });

  const page = await browser.newPage();
  // @ts-ignore
  let _size = sizeMap[size];
  const { width, height } = _size;
  await page.setViewport({
    width,
    height
  });
  await page.setContent(content, { waitUntil: "networkidle0" });

    // if debug is enabled, save the html
    if (debug) {
      await fsPromises.writeFile(filename.replaceAll('.gif', '.html'), content);
    }
    // record gif
  var encoder = new GIFEncoder(width, height);
  encoder.createWriteStream()
    .pipe(fs.createWriteStream(filename));

  // setting gif encoder  
  encoder.start();
  encoder.setRepeat(0);
  encoder.setDelay(150);
  encoder.setQuality(10); // default

  for (let i = 0; i < 10; i++) {
    await this.gifAddFrame(page, encoder, width, height);
  }
  
  // finish encoder, gif saved   
  encoder.finish();
  await browser.close();
  }

  async createOrOverwrite(
    rootDir: string,
    outputDir: string,
    filename: any,
    content: string | Buffer,
    // @todo allow to overwrite
    overwrite = false
  ) {
    filename = join(rootDir, outputDir, filename);
    // @todo allow to overwrite
    if (!overwrite) {
      content = this.setContent(filename, content);
    }
    // We need to create the directory if it doesn't exist
    await fsPromises.mkdir(dirname(filename), { recursive: true });
    await fsPromises.writeFile(filename, content);
  }
  setContent(filename: any, content: string | Buffer): string | Buffer {
    try {
      if (fs.existsSync(filename)) {
        // @todo: use AST to check if the content is the same
        // and update accordingly
      }
    } catch (error) {
      // contine silently
      // @todo: elaborate error handling
      console.log(filename, error.message);
    }
    return content;
  }

  async getFiles(rootDir: string, outputDir: string) {
    const files = await fsPromises.readdir(join(rootDir, outputDir));
    return files;
  }
}
