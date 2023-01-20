# alisters-password-generator

## Description

This is a "Starter codeh" challenge, in which I am given starting code and must add to it to create a password generation application which produces a strong random password using a selected combination of character/special characters. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript.

This is my first time really getting into Javascript, so I found the password generator challenge difficult dealing with and figuring out how to use all the new terminology - variables, objects, functions arrays, etc. I found using pseudo-code to map out what I was trying to achieve first, as well as modulating each part helped significantly.

The Challenge contains a User Story and an Acceptance Criteria to define the parameters I had to follow to complete it.

Here is the criteria for the project:

### User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

### Acceptance Criteria 
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


## Built Using

1. HTML
2. CSS
3. JavaScript

## Live Deployment

Link to my live project site: https://porteous89.github.io/alisters-password-generator/

## Usage

#### Video of Password Generator Working
https://drive.google.com/file/d/17yzz0GsYUVmGNfVCWi83Mvm1_6HQM2VA/view

#### Working section by section
<img src="Develop\assets\Working-section-by-section.png" width= 35% >

#### Console displaying no errors while running Password Generator
<img src="Develop\assets\console-noErrors.png" width= 35% >



## Credits

#### MDN - Javascript Math
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

#### MDN - Javascript String
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### Eloquent JavaScript
(https://eloquentjavascript.net/Eloquent_JavaScript_small.pdf)


## License

MIT License - License in Repo

---

## Features

1. If password is too short or long, the user will be given an alert asking them to re-enter.
2. If no characters are selected user gets alert that they must select at least one character type.
3. Each time the use gets the choice to chage their answer or cancel.
4. Once user has successfully went through the prompts, a strong random password is generated.

## Tests

Test Functionality of each link:

1. Enter password length under 8 character - User gets an alert asking them to retry.
2. Choose no characters from the prompts - User gets an alert asking them to choose at least one.
3. If User cancels prompts - a message is displayed saying a password could not be created.
4. if User chooses a password length between 8-128 and at least one character type from the prompts - A random password is generated.
5. Once generate button is pressed it will restart the process.
