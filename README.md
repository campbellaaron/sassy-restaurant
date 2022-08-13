# Sassy Classy Restaurant

This is a project built to learn how to use SASS/SCSS and Gulp together, along with Browser-Sync. This was used with a project-based course on [Udemy](https://udemy.com/course/sass-the-complete-sass-course-css-preprocessor). **See "Why Gulp?" down below.**

## Installation

Use Node to install necessary packages with the following command:

```bash
npm install
```

Add a -g at the end if you don't have NPM or Gulp installed anywhere else on your system

## Usage

```shell
# Running 'gulp' command will start localhost and run the page in default browser
gulp
```

## Why Gulp?
The original project was going to be built using some NPM-based shell/bash commands, which was going to be complicated. Gulp is meant to be a compiler anyway, so a custom Gulpfile was created that not only compiles all of the SCSS into a *main.css* file, it also uses a Node package called "CSS Nano" that minimizes the CSS into one line, eliminating whitespace. 

```css
*{margin:0;padding:0}.logo{border:3px solid #d3ab55;height:110px;margin-right:1.3rem;width:110px} /* and so on and so forth */
```

## License
[MIT](https://choosealicense.com/licenses/mit/)