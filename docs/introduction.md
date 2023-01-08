## Table of Contents

-   [Getting Started](#getting-started)
    -   [Installing Node.js](#installing-nodejs)
    -   [Installing Yarn](#installing-yarn)
-   [Usage](#usage)

# Getting Started

Before you can use our application, you'll need to install Node.js. Here's why:

Node.js is a runtime environment that allows you to run JavaScript on your computer, outside of a web browser. Our application is built using JavaScript, and requires Node.js to be installed in order to run properly. Without Node.js, you won't be able to use our application.

**Technical note:** While other runtime environments, may be compatible with our application, we currently only support Node.js as the runtime environment for our application

Here's how to install Node.js:

1. Go to the Node.js download page: https://nodejs.org/en/download/
2. Select the version of Node.js that is appropriate for your operating system (Windows, Mac, or Linux).
3. Follow the instructions provided on the download page to install Node.js on your computer.
4. Once the installation is complete, you can check if Node.js was installed successfully by opening a terminal or command prompt and typing "node -v". This should display the version number of Node.js that you have installed.

Note: The minimum required version of Node.js for our application is ^14.18.0 || >=16.0.0. We recommend installing the latest LTS (long-term support) version of Node.js for the best performance and stability.

## Installing Yarn

Our application also requires that you have Yarn installed. Yarn is a package manager that helps you manage the dependencies and packages required for your application. You can install Yarn by following the instructions on the Yarn website: https://yarnpkg.com/getting-started/install

That's it! You're now ready to start using our application.

# Usage

To use our application, you'll need to configure it with your specific settings. Here's how the configuration works:

To configure your application, you have two options:

1.  Create a config.toml file using template.blank.toml as a starting point. You can find template.blank.toml and an example template.example.toml file in the root directory of the project. Both template.blank.toml and template.example.toml are fully commented examples, but template.example.toml provides an example configuration. We recommend this option if you need to generate static assets as the output.

2.  Base64 encode your desired configuration and set it as the config environment variable. To base64 encode your configuration, you can use a tool like this one: https://www.base64encode.org/. Setting an environment variable will vary depending on your operating system and the application you are using to run our application.

Why use base64 encoding? Base64 encoding allows you to represent your configuration as a single string, which can be easily stored as an environment variable or passed as an argument to the application. This can be useful if you are using a website or build system such as Cloudflare Pages or Netlify.

To use our application, you'll need to install the necessary dependencies by running `yarn install` and then build the project with `yarn build`. These commands should be run after you have configured the application using either of the two options described above. If you are using a website or build system such as Netlify, these commands may need to be specified in the build settings. Make sure to run `yarn build` every time you make changes to the configuration in order for them to take effect.
