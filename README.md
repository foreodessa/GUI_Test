# adidas GUI Testing

Case Study, nuff said.

### UI Tests: 
 
1. Finding to check a order or delivery status

2. Product code is found on product page

3. Succsesfully going back to the main page from product page

### Reports

The reports can be found the in ./reports/e2e

(reports will pop up in your browser after you excution)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
node.js
Nightwatch.js
selenium-server
Nightwatch html reporter

```

### Installing

A step by step series of examples that tell you have to get a development env running

Installing node.js and npm is important for this env 

For windows we will need an installer

Click [here](http://blog.teamtreehouse.com/install-node-js-npm-windows) for that.

For Mac we first install homebrew:
``` 
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
Then in the terminal 

```
brew install node

```
#### 1) Make sure you have Java(_Runtime Environment JRE_) installed

This is important for the selenium-server

You can check by typing
`
java -version
`
into your terminal and you should see your version number if you have Java installed.

> How do I install Java? http://www.oracle.com/technetwork/java/javase/downloads/jdk9-downloads-3848520.html
> pick your Operating System and follow the instructions

##### Mac OSX? (_use homebrew_)

If you haven't updated `brew` in a while, do that first:
```sh
brew update
```
That will install [`cask`](https://caskroom.github.io/) which is now _part_ of Homebrew.

Now you can install Java:
```sh
brew cask install java
```
You should see something like this:
![install-java-with-homebrew-cask](https://cloud.githubusercontent.com/assets/194400/16007040/296f1bfc-3168-11e6-8009-8f39b715239d.png)

> See: [http://stackoverflow.com/questions/24342886/how-to-**install-java-8**-on-**mac**](http://stackoverflow.com/questions/24342886/how-to-install-java-8-on-mac)

#### 2) `cd` into the GUI_project

#### 3) Install `nightwatch`

First install the `nightwatch` node.js module from NPM:

```sh
npm install nightwatch --save-dev
```

#### 4) Install `selenium-server` 

```sh
npm install selenium-server --save-dev
```

### 5) Install `nightwatch html reporter`

```
npm install nightwatch-html reporter -g
```
### 6) Installing both Chrome and Firefox drivers (if both are are not in the /bin)

Download and copy the lastest file [Chrome driver](https://sites.google.com/a/chromium.org/chromedriver/)  and [Firefox driver](https://github.com/mozilla/geckodriver/releases) into the the bin folder.  

## Running the tests

For the GUI tests simply type 
```
npm  run e2e
```

## Built With

* [Nightwatch.js](http://nightwatchjs.org/) - The browser automated testing framework used


## Author

* **Marcus Johnson** - [foreodessa](https://github.com/foreodessa)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Nightwatch tutorials
* Inspiration
* etc
