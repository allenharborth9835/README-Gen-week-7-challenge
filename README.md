# README-Gen-week-7-challenge
<img src="https://img.shields.io/badge/license-Unlicensed-blue" alt="Unlicensed">

## Description
For this Project  I had to create a readme generator that creates a readme for your project. I first created the structure with a utils folder that will contain the readme generator and license generator that will be used in the index, and a dist folder that will contain the README files that are created. In the index file I first call the generateMarkdown file from the utils folder. I then call the fs function and the inquirer function. The next thing I define is the questions for the inquirer and then create the function to save the file in the dist folder. The last function I define is the init function that uses inquirer to prompt the user the questions, then generates the markdown folder and finally creates the readme file. In the generateMarkdown file it uses a function to render the badge and link for that specific license and then gives it to renderLicenseSection to render the copyright. The last functions of the readme gathers the user input and creates a table element and section for the info received. The users also have the option to skip specific sections if they choose to.  
## Table of Contents
* [Installation](#installation)
 * [Usage](#usage)
* [Credits](#credits)
* [License](#license)

* [Contact-Info](#contact-info)
## Installation  
Node must be installed please go to https://nodejs.org/en/ to install mode.  
## Usage  
A link to the tutorial video was added after the tut_video  

<video width="320" height="240" controls>
  <source src="./tut-video/tut-video.mov" type="video/mp4">
</video>
## Credits  
Starter code provided by the class was taken from https://github.com/coding-boot-camp/potential-enigma and provided by https://github.com/coding-boot-camp  
## License

  <div style="height:300px; width:90%; overflow:auto;">

      This is free and unencumbered software released into the public domain.
    
      Anyone is free to copy, modify, publish, use, compile, sell, or
      distribute this software, either in source code form or as a compiled
      binary, for any purpose, commercial or non-commercial, and by any
      means.
      
      In jurisdictions that recognize copyright laws, the author or authors
      of this software dedicate any and all copyright interest in the
      software to the public domain. We make this dedication for the benefit
      of the public at large and to the detriment of our heirs and
      successors. We intend this dedication to be an overt act of
      relinquishment in perpetuity of all present and future rights to this
      software under copyright law.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
      IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
      OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
      ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
      OTHER DEALINGS IN THE SOFTWARE.
  </div>
        
For more information, please refer to [https://unlicense.org](https://unlicense.org)


## Contact-Info
this project was created by Allen D Harborth

Github(s)[allenharborth9835](https://github.com/allenharborth9835)

get in contact by sending an email at allenharborth9835@gmail.com
