#### About

>
>	This project is creating a User Login System
>

#### Prerequisite:

>
>- install express
>- install express-generator
>- install MongoDB

#### Steps:

>
>- Install express express &amp; express generator
>```sh
>$ npm install -g express
>$ npm install -g express-generator
>```
>- Install MongoDB
>
>- Create an express website using following command
>
>```sh
>$ express login-system
>```
>
>- In [package.json](login-system/package.json) file in dependencies add nodemailer
>```sh
> "dependencies":{
> ...
    "mongodb":"*",
    "mongoose":"*",
    "connect-flash":"*",
    "express-validator":"*",
    "express-session":"*",
    "express-messages":"*",
    "passport":"*",
    "passport-local":"*",
    "passport-http":"*",
    "multer":"*"
> }
>```
>- Move to express_website
>```sh
>$ cd login-system
>```
>- Install all the dependencies using following command (It will get all dependencies in node modules directory)
>```sh
>$ npm install
>```
