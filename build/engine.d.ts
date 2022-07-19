/// <reference types="node" />
import { Engine as BaseEngine } from 'basic-kodyfire';
export declare class Engine extends BaseEngine {
    builder: any;
    constructor();
    decode(png: any): Promise<unknown>;
    gifAddFrame(page: any, encoder: any, width: any, height: any): Promise<void>;
    read(path: string, templateName: any): Promise<any>;
    getPartial(path: string, template: string, data: any): Promise<any>;
    compile(template: any, data: any): any;
    create(rootDir: string, outputDir: string, filename: any, content: string | Buffer): Promise<void>;
    overwrite(rootDir: string, outputDir: string, filename: any, content: string | Buffer): Promise<void>;
    createOrOverwriteImage(rootDir: string, outputDir: string, filename: any, content: string | Buffer, size?: string, debug?: boolean, overwrite?: boolean): Promise<void>;
    createOrOverwrite(rootDir: string, outputDir: string, filename: any, content: string | Buffer, overwrite?: boolean): Promise<void>;
    setContent(filename: any, content: string | Buffer): string | Buffer;
    getFiles(rootDir: string, outputDir: string): Promise<any>;
}
