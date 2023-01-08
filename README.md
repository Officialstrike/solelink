<p align="center">
    <img width="180" src="public/icon.svg" alt="Solelink logo">
</p>
<br/>
<p align="center">
  <a href="/LICENSE.md"><img src="https://img.shields.io/github/license/officialstrike/solelink?style=flat-square" alt="License"></a>
  <a href="https://github.com/officialstrike/solelink/issues"><img src="https://img.shields.io/github/issues/officialstrike/solelink?style=flat-square" alt="Issues"></a>
  <a href="https://github.com/officialstrike/solelink/graphs/contributors"><img src="https://img.shields.io/github/contributors-anon/officialstrike/solelink?style=flat-square" alt="Contributors"></a>
  <!-- TODO: create example site -->
  <a href="https://example.com"><img src="https://img.shields.io/badge/demo-example.com-informational?style=flat-square" alt="Example site"></a>
</p>
<br/>

# Solelink 🔗

> Solelink is the ultimate tool for streamlining your online links and text! With Solelink, you can easily create and deploy a website that showcases your social media profiles, payment providers, and more. Join the Solelink community and revolutionize your online presence.

[Read the documentation for detailed instructions](docs/introduction.md).


## Table of Contents
- [Quick Start](#quick-start)
- [Features](#features)
- [Contribution](#contribution)
- [Ways to Support Solelink](#ways-to-support-solelink)
- [License](#license)

## Quick Start
### Prerequisites
- [Node.js](https://nodejs.org/en/download/) anything above v14.18.0
- [Yarn package manager](https://yarnpkg.com/getting-started/install)
- Edit the [template.toml](template.toml) file
- Place your images etc in
- Clone the repository and make it your current working directory

### Commands
Install the dependencies

```
yarn install
```
Build the app
```
yarn build
```
You will now see the files in the "dist" folder.


For more detailed instructions of usage & other features, read the [docs](docs/introduction.md).


## Features
[Back to top](#table-of-contents)

- Static site generation: Solelink allows you to easily create and deploy a static website to popular hosting platforms like Cloudflare Pages and Netlify, which offer free hosting services and do not require a credit card to set up. It is also easy to add a custom domain to your website on these platforms.

- Social media and payment links: Solelink makes it easy to include links to your social media profiles and payment providers, all in one place.

- Easy to use: Solelink uses the TOML configuration file format, which is easy to understand and modify.

- Customizable: Solelink is built with Tailwind and Typescript, making it easy to customize and extend to meet your specific needs.

## Contribution
[Back to top](#table-of-contents)

Thanks for considering contributing to the Solelink project! We always welcome improvements and contributions from the open-source community. If you'd like to make a contribution, please refer to our [Contributing Guide](CONTRIBUTING.md). for more information on how to do so.

## Ways to Support Solelink
[Back to top](#table-of-contents)

If you want to show your appreciation for Solelink and support its ongoing development, here are a few ways you can help:

- Give the project a star on GitHub
- Talk about solelink on social media
- Recommend it to your friends
- Consider contributing

## TODO
[Back to top](#table-of-contents)

Here's a couple things I would like to do:

- [ ] Fix CSP, stop using `unsafe-inline` and use hash's instead; [Proposed solution](vite-utils.js#L47), [Helpful resource](https://content-security-policy.com/hash/)
- [ ] Prefetch the CSS; pending https://github.com/vitejs/vite/pull/11484https://github.com/vitejs/vite/pull/11484
- [ ] Switch to using tailwind defined colors(IE define colors in tailwind.config.cjs)
- [ ] Allow user to change tailwind defined colors
- [ ] Stop using data uri's(base64 images) and just import them
- [ ] allow for qrcodes to be replaced with custom image
- [ ] create a plugin to download image urls to the disk
- [ ] create a web interface for a more simplified interface, this can come in many forms such as:
    - A config generator, which might have possibility to be interoperable with cf pages
    - A web interface with a backend attached to it to generate assets for the user
    - Take inspiration from Stackblitz's webcontainers and somehow run the vite build process in the browser
- [ ] allow for background to be customized with images
- [ ] try to reduce the JS to the be the least possible
- [ ] Allow for custom themes
- [ ] A redesign working with professional designers

## License
[Back to top](#table-of-contents)

[MPL2](LICENSE).
