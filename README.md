#Hello Build System World
**Part 2. Setup AutoPrefixer and Minifier / Uglifier

*Developing out my Grunt Build System by Chris Sargent of [Sticky Pixel](http://www.stickypixel.com)*

**Part 1 [Here}(https://github.com/ChrisSargent/Build-System-Tutorial-Part-1)**
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

Last time out I started to setup my development environment using Grunt and installed a SASS compliler, Javascript Concatenate and Watch in to Grunt. This time I’m setting up CSSNext which will AutoPrefix my CSS code with Browser-Specific prefixes and also allows me / you to write next generation CSS code that is automatically Transpiled in to vanilla CSS.

I will still write and use SASS files for now because I prefer the way that SASS deals with variables. Reading the specs of the CSS3 variables looks odd and to me it just seems they have the declaration and usage the wrong way around. Would seem much more logical and intuitive to me to use a similar syntax and method of doing it as Javascript but hey, who the hell am I to think that?!

##Setup CSSNext (Includes AutoPrefixer)
https://github.com/cssnext/grunt-cssnext

I was going to setup AutoPrefixer but when I visited their Github page (https://github.com/ndmitry/grunt-autoprefixer), I saw that it was, in fact, deprecated in favour of PostCSS. So I started to install that from their Github page instead (https://github.com/nDmitry/grunt-postcss). But, as it turns out, you don’t need PostCSS if you’re using CSSNext with Grunt and since CSSNext (which I wanted to use anyway) includes AutoPrefixer, I decided to just go for that instead.

So, now, we’ll simply install CSSNext: 

To install it, run this command from the Terminal in your Project Folder

```
$ npm install --save-dev grunt-cssnext
```

This will automatically include a reference to CSSNext in the package.json file. It took a little while on my machine.

Then add the following to the Gruntfile:

```js
grunt.loadNpmTasks("grunt-cssnext");
```

Again we need to add some config details and again I stripped out everything I didn’t really need  – you can see it in my final code later in the article.

See these articles for a bit of info about the SASS compiler vs the PostCSS transpiler http://benfrain.com/breaking-up-with-sass-postcss/ and https://blog.colepeters.com/on-writing-real-css-again/.

