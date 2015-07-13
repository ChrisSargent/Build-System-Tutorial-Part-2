#Hello Build System World
**Part 2. Setup AutoPrefixer and Minifier / Uglifier**

*Developing out my Grunt Build System by Chris Sargent of [Sticky Pixel](http://www.stickypixel.com)*

**Part 1 [Here](https://github.com/ChrisSargent/Build-System-Tutorial-Part-1)**
- Install Grunt
- Setup SASS Compiler
- Setup Concatenate Javascript
- Setup watch on save

**Part 2**
- Auto-Prefixing CSS and using CSSNext for the future
- Uglify JS and CSS (compress / minify)
- JSHint

**Part 3**
- Local Server
- Live Reload

Last time out I started to setup my development environment using Grunt and installed a SASS compliler, Javascript Concatenate and Watch in to Grunt. This time I'm gonna get my CSS code browser compatible with an AutoPrefixer, shorten my page load times by Uglifying my Javascript and start using JSHint to alert me of any issues in my Javascript.

##Setup CSSNext (Includes AutoPrefixer)
https://github.com/cssnext/grunt-cssnext

Originally, I was going to setup AutoPrefixer but when I visited their Github page (https://github.com/ndmitry/grunt-autoprefixer), I saw that it was in fact, deprecated in favour of PostCSS. So I started to install that from their Github page instead (https://github.com/nDmitry/grunt-postcss). But, as it turns out, you don’t need PostCSS if you’re going to use CSSNext with Grunt and since CSSNext (which I wanted to use anyway) includes AutoPrefixer, I decided to just go for that instead. Cssnext is a CSS transpiler that allows you to use the latest CSS syntax today. It transforms new CSS specs into more compatible CSS so you don't need to wait for browser support. In addition, it will AutoPrefix my CSS code with Browser-Specific prefixes.

However, I will still write and use SASS files for now because I prefer the way that SASS deals with variables. Reading the specs of the CSS3 variables looks odd and to me it just seems they have the declaration and usage the wrong way around. Would seem much more logical and intuitive to me to use a similar syntax and method of doing it as Javascript but hey, who the hell am I to think that?!

So, I went ahead and installed CSSNext by running this command from the Terminal in my Project Folder

```
$ npm install --save-dev grunt-cssnext
```

As before this automatically included a reference to Watch in my package.json file. Then I added the following to the Gruntfile:

```js
grunt.loadNpmTasks("grunt-cssnext");
```

Then I added some configuration code to my Gruntfile, taken from their Github examples – you can see it in my final code on Github.

I'd also recommend reading these articles for a bit more info about the SASS compiler vs the PostCSS transpiler http://benfrain.com/breaking-up-with-sass-postcss/ and https://blog.colepeters.com/on-writing-real-css-again/.

##Setup Uglify
https://github.com/gruntjs/grunt-contrib-uglify

Next up, I installed Uglify in much the same way as all the other plugins, by running this command from the Terminal in my Project Folder

```
$ npm install grunt-contrib-uglify --save-dev
```

Which automatically included a reference to Uglify in my package.json file. Then I added the following to the Gruntfile:

```js
grunt.loadNpmTasks("grunt-grunt-contrib-uglify");
```

This way of installing is getting pretty familiar now! Finally, I added some configuration code to my Gruntfile, taken from their Github examples. After installing Uglify, I realised that actually, it doesn't also Uglify CSS files (I guess I should have read the specs more!). But no worries, we can change the config of our SASS compiler so that it outputs compressed CSS instead. To do so I simply needed to change the following line in the SASS section of my Gruntfile:

```js
compress: false,
```

to

```js
style: 'compressed',
```

I now had very ugly CSS and Javascript files! Happily, the CSSNext plugin which is adding the browser prefixes to my CSS code doesn't seem to add any additional white space or break the ugliness either.

##Setup JSHint
https://github.com/gruntjs/grunt-contrib-jshint

Finally for this part, I installed JSHint which will help alert me to errors in my code before I preview them in a browser. In the same way as all the other plugins, I installed it by running this command from the Terminal in my Project Folder

```
$ npm install grunt-contrib-jshint --save-dev
```

Which automatically included a reference to JSHint in my package.json file. Then I added the following to the Gruntfile:

```js
grunt.loadNpmTasks('grunt-contrib-jshint');
```

Finally, I added some configuration code to my Gruntfile, taken from their Github examples - because we're concatenating our Javascript files, I used their configuration example for that scenario.

##Finally...
That's it for this part. I've now got Grunt up and running, it's compiling my SASS, compressing my CSS files, concatenating my JS files, telling me what's wrong with it and finally minifying my javascript! Sweet. Next time, I'm going to set up the Grunt local server and live reload. As a nice bonus, I'm becoming much more familiar with Github terminal commands.