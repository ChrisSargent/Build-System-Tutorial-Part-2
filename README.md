#Hello Build System World
**Part 1. Install Grunt, Setup SASS Compiler, Concatenate & Watch.**

*Developing out my Grunt Build System by Chris Sargent of [Sticky Pixel](http://www.stickypixel.com)*

I've been thinking for some time that I really need to sort out a 'build system' for myself. After watching several tutorials I'd noticed that most of the presenters were using them and they certainly seemed to help for automating a lot of the mundane tasks I was constantly doing. I also wanted to start making my projects a lot more 'familiar' and trying to build them out in as modular, resuable fashion as possible. To do this I knew I needed a task manager and Grunt or Gulp seem to be the apps of choice just now so I decided to try Grunt. The thing to remember about Grunt is that it is __just__ a task runner; nothing more, nothing less. You install it and then you need to tell it which tasks to run and when to run them. Another really good video is from Chris Coyier of CSS Tricks here: https://www.youtube.com/watch?v=Mr2VBRdRYak.

This is a ‘tutorial’ I wrote whilst setting up Grunt myself, predominantly inspired by this video: https://www.youtube.com/watch?v=TMKj0BxzVgw from Will at [Learn Code Academy](https://www.youtube.com/channel/UCVTlvUkGslCV_h-nSAId8Sw) and several videos from Travis at [Dev Tips](https://www.youtube.com/channel/UCyIe-61Y8C4_o-zZCtO4ETQ) (If you haven't already you should definitely check out their YouTube channels). I don’t follow it exactly because I’m setting it up for my workflow, but I was certainly inspired by the videos to do it.

**Part 1**
- Install Grunt
- Setup SASS Compiler
- Setup Concatenate Javascript
- Setup watch on save

**Part 2**
- Auto-Prefixing CSS and using CSSNext for the future
- Uglify JS and CSS (compress / minify)

**Part 3**
- JSHint
- Local Server
- Live Reload

###Installing Grunt Command Line
First off, I installed Node.js from https://nodejs.org/ then installed the Grunt CLI using:

```
$ npm install -g grunt-cli
```

_Beware the following comment from the Grunt website!_

>Before setting up Grunt ensure that your npm is up-to-date by running npm update -g npm (this might require sudo on certain systems).

_In my case, I did need to run it using **sudo**. The first time I did it, I didn't use **sudo**, it failed and prevent **npm** from working (file or directory not found error). I had to reinstall node to get it working, then ran it with **sudo** and I was good to go._

###Create a New Project
I then created a new Project Folder in Finder (or you can use your favourite text editor) using a very basic directory structure, a bit like this:

```
+-- build
|   +-- all my build files / folders will end up here
+-- sass
|   +-- _layout.scss
|   +-- _reset.scss
|   +-- _typography.scss
|   +-- base.scss
+-- js
|   +-- main.js
|   +-- snippets.js
+-- Gruntfile.js
+-- index.html
+-- package.json
```

Each Project that I want to use Grunt with will need a Gruntfile.js and package.json in its root directory. So I initially created a Gruntfile.js with the following contents:

```js
module.exports = function (grunt) {};

and a package.json file with the following contents:

{
  "name": "my-project-name",
  "version": "1.0.0",
  "author": "You",
  "dependencies": {},
  "devDependencies": {}
}
```

I also created a blank package.json file and used some boilerplate code from the Grunt website. Alternatively, I could have used

```
$ npm init
```

from the terminal in my Project Folder which would have created a basic package.json file but I preferred to create it myself for now. The great thing about using **npm** and a package.json file (I believe) is that it makes it very easy for people to duplicate your project later and automatically install all it's dependencies.

###Installing Grunt in to My Project
I now needed to install Grunt in to the specific project I was working on. From the Terminal window, whilst in my Project Folder, I ran:

```
$ npm install -S grunt
```

which created a folder in my project called node_modules, installed Grunt into that folder and included it as a dependency in the package.json file (Be sure to include the –S to ensure the package.json file is automatically updated). Grunt was now installed in my project so I could now install and setup some tasks for it to run.

####Setup SASS Compiler

https://github.com/gruntjs/grunt-contrib-sass

With Grunt now installed in my project, I could then install various plugins from the Grunt website. In this case, I installed the SASS Compiler right from the get-go.

Despite planning to later setup the CSSNext transpiler, I still wanted to be able to handle SASS files because I’m more familiar with them at the moment. I see no real harm in continuing to use a pre-processor that gives tremendous value and features and a post-processor at the same time. Eventually, maybe we’ll be using vanilla CSS3 variables but for now, this will do!

So, I installed the SASS compiler from the Grunt team (link is above) by running this command from the Terminal in my Project Folder:

```
$ npm install grunt-contrib-sass --save-dev
```

This automatically included a reference to SASS in my package.json file. It took a few minutes to complete on my machine.

So, the SASS compiler was now installed but as yet Grunt was not being instructed to run it. Therefore, in my Gruntfile.js I needed to add the following line to enable the SASS task to be loaded:

```js
grunt.loadNpmTasks("grunt-contrib-sass");
```

I also needed to add some config details to the Gruntfile.js and the best source of information for this is the relevant documentation on Github. However, you can see my final config in my files on GitHub.

Note that the SASS task also requires Ruby and Sass to be installed. If you're on OS X or Linux you probably already have Ruby installed; test in your terminal with

```
$ ruby –v
```

and

```
$ sass –v
```

If you have confirmed you have Ruby installed but not SASS, you can run the following command to install Sass. (You may not need to use the Sudo part but I did)

```
$ sudo gem install sass
```

Also note that SASS files (.sass, .scss) whose filename begins with "_" are ignored even if they match the pattern in the config in the Gruntfile.js. This is done to match the expected Sass partial behaviour. In my config, I also set it up to not create .map files and to not compress it because I will use a minifier to do that later.

At this point and after reading the Grunt SASS documentation, although I realised I didn’t really need the Concatenate function for the CSS because I would handle this via @import’s in my SASS files, I would still need it for Javascript files. So I continued on to installing the Grunt Concatenate function.

###Setup Concatenate

https://github.com/gruntjs/grunt-contrib-concat

To install the Concatenate function, I ran this command from the Terminal in my Project Folder

```
$ npm install grunt-contrib-concat --save-dev
```

As before, this automatically included a reference to Concatenate in my package.json file.

Once again, the Concatenate function was now installed but Grunt was not being instructed to run it. Therefore, in my Gruntfile.js I added the following line to enable the Concatenate task to be loaded:

```js
grunt.loadNpmTasks('grunt-contrib-concat');
```

I also needed to add some config details to the Gruntfile.js and the best source of information for this is the relevant documentation on Github. However, you can see my final config in my files on GitHub.

And that’s it for the Concatenation; files in my JS folder ending in .js will now be concatenated to one file which will help considerably with page load times.

###Setup Watch

https://github.com/gruntjs/grunt-contrib-watch

Finally for Part 1, I installed Watch so that my desired Grunt tasks would be automatically run when I save my files: 

To install it, I ran this command from the Terminal in my Project Folder

```
$ npm install grunt-contrib-watch --save-dev
```

As before this automatically included a reference to Watch in my package.json file.

Then add the following to the Gruntfile:

```js
grunt.loadNpmTasks('grunt-contrib-watch');
```

And, of course, I added some configuration to my Gruntfile.js.

So finally, here’s my Gruntfile.js after installing the SASS compiler, Concatenate and Watch. I also added a default option so that you can just run Grunt and the watch starts automatically: https://github.com/ChrisSargent/Build-System-Tutorial-Part-1/blob/master/Gruntfile.js

And here’s my package.json file after installing Concatenate and Watch: https://github.com/ChrisSargent/Build-System-Tutorial-Part-1/blob/master/package.json

So to make this all work when I’m working on a project, I simply need to open a Terminal window, navigate to my Project Folder and then enter the following command:

```
$ grunt
```

My .scss files and .js files will now be automatically compiled and concatenated whenever I save them and will be output to my build folder for deployment. As a by-product, by writing this tutorial and putting it on Github, I'm also getting more familiar with Git terminal commands and trying to write my code like other people might see it sometime.

So that’s it for now; next up, I’m adding the Auto-Prefixer and minifier / Uglifier.
