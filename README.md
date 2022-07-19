# Welcome to social-gif-kodyfire 👋
![Version](https://img.shields.io/badge/version-0.0.5-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/nooqta/kodyfire#install-a-kody)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/nooqta/kodyfire/blob/main/LICENSE)
[![Twitter: anis\_marrouchi](https://img.shields.io/twitter/follow/anis\_marrouchi.svg?style=social)](https://twitter.com/anis\_marrouchi)

> Generate a dynamic gif for social media sharing based on HTML templates using [Kodyfire](https://github.com/nooqta/kodyfire). This is just the beginning.

### 🏠 [Homepage](https://github.com/nooqta/kodyfire)

## Requirements

social-gif-kodyfire requires the [kodyfire-cli](https://github.com/nooqta/kodyfire) to be installed

```sh
npm install -g kodyfire-cli
```
## Install

```sh
npm install social-gif-kodyfire
```

## Usage

Refer to the kodyfire ["install a kody"](https://github.com/nooqta/kodyfire#install-a-kody) section.
Once your project is initialized and ready for kody, run the following command to generate your images.
```sh
kody run -s kody-social-gif.json
```
### Available Templates 

#### `doodle` (credits: [css-doodle](https://github.com/css-doodle/css-doodle))

> Tempate using the doodle-css as animated background

<table>
  <tr>
     <td>seeding</td>
     <td>strings</td>
     <td>timeTravel</td>
  </tr>
  <tr>
    <td><img src="assets/doodle-seeding.png" width=200></td>
    <td><img src="assets/doodle-strings.png" width=200></td>
    <td><img src="assets/doodle-timeTravel.png" width=200></td>
  </tr>
 </table>

##### Params

- `title` _string_ - title text
- `subtitle` _string_ - subtitle text
- `logo` _string_ - URL for the logo
- `googleFont` _string_ - (optional) Google font name
- `fontFamily` _string_ - css rule for font-family (required if using googleFont)
- `doodle` _enum_ - doodle background name [ seeding, strings, timeTravel]
- `color` _string_ - Valid CSS color
- `watermark` _string_ - (optional) text for footer

Add the following params to your generated concepts. As an example, the final updated concepts might look like the following:
```json
{
      "name": "image-3",
      "template": "doodle.html.template",
      "fontWeight": "medium",
      "fontSize": "80px",
      "title": "Hello World!",
      "subtitle": "Your subtitle",
      "eyebrow": "17 July 2022",
      "logo": "https://noqta.tn/_next/image?url=%2Fimages%2Flogo.svg&w=256&q=75",
      "background": "tranparent",
      "doodle": "timeTravel",
      "color": "#000",
      "includeWatermark": true,
      "watermark": "social-gif-kodyfire",
      "size": "facebook",
      "outputDir": ""
    }
```
## 📅 Future Features
- Add common social post dimensions as size
- Allow passing arguments to doodles
- Compose doodle for dymamic backgrounds
- Add template for most common post subjects
- Add meme template
## Run tests

```sh
TODO
```

## Author

👤 **Anis Marrouchi**

* Website: https://noqta.tn
* Twitter: [@anis\_marrouchi](https://twitter.com/anis\_marrouchi)
* GitHub: [@anis-marrouchi](https://github.com/anis-marrouchi)
* LinkedIn: [@marrouchi](https://linkedin.com/in/marrouchi)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/anis-marrouchi/social-gif-kodyfire/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## Credits

- [css-doodle](https://github.com/css-doodle/css-doodle) by [css-doodle](https://github.com/css-doodle) Beautiful work, We are so thankful.
- [puppeteer](https://github.com/puppeteer/puppeteer) by [puppeteer](https://github.com/puppeteer) Danke schone!

## 📝 License

Copyright © 2022 [Anis Marrouchi](https://github.com/anis-marrouchi).

This project is [MIT](https://github.com/nooqta/kodyfire/blob/main/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-kodyfire](https://github.com/nooqta/readme-kodyfire)_
