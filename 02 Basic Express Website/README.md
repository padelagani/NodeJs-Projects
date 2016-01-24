#### About

>
>	This project is about creating basic express website.
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
>
> File: [Home Page](express_website/views/index.jade)
>
![Home](ScreenShots/01-home.png?raw=true)
>
>- File [About](express_website/views/about.jade)
>
![About](ScreenShots/02-about.png?raw=true)
>
>- File [Conatct](express_website/views/contact.jade)
>
![Contact](ScreenShots/03-contact.png?raw=true)
>
> #### Receive Contact Us form submission using gmail (Codes are already written in files)
>>- Create a nodemailer variable in [app.js](express_website/app.js)
>>- Write a code of send message in contact route file [contact.js](express_website/routes/contact.js)
>>
>> Contact Form
>>
![Contact](ScreenShots/04-contact-test.png?raw=true)
>>
>> Received Mail of Submission
>>
![Mail](ScreenShots/05-look-in-mail.png?raw=true)
>>
>
