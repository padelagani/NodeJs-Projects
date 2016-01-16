#### About

>
>	This project a simple web server is generated using nodeJs.
>

#### Prerequisite:

>
>- install express
>- install express-generator
>

#### Steps:

>
>- Install express express &amp; express generator
>
>```sh
>$ npm install -g express
>$ npm install -g express-generator
>```
>- Create an express website using following command
>
>```sh
>$ express express_website
>```
>
>- In package.json file in dependencies add nodemailer
>```sh
> "dependencies":{
> ...
> "nodemailer": "*" ('*' for latest version)
> }
>```
>- Move to express_website
>```sh
>$ cd express_website
>```
>- Install all the dependencies using following command (It will get all dependencies in node modules directory)
>```sh
>$ npm install
>```
>- Start your website using below command (Default port is 3000)
>```sh
>$ npm start
>```
>- Add basic website code using jade as express contains jade format and define routes to different pages
