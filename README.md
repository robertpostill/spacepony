# A model of a spacepony

## Day 0

Here I will create a 3D version of what I believe is a spacepony.

It will be made using three.js

## Day 1

I've set up a few basic files to get me started on making my 3d Javascript
spacepony. I have a vague idea about what I want to build but I guess I will see
what will happen when it happens.

I've learnt this past year how to set up a project correctly which I feel like I
didn't understand before. I've also realised that the order you put reference
files in your HTML file totally matters!

So in my case I'm probably going to have a few JS files and they will need to be
referenced correctly in order for them to render in the scene correctly.

I've added `three.min.js`! This is the entire `three.js` in one file, minified! I thought it was best to do this for speed of rendering and such. Also, it's just a library that I'm using so yeahhhh don't really care what happens to the look of it as I can totally check the doco for how to use this thing.

I've added `TrackballControls.js` too. This lets me navigate around the scene in a really easy way. A must have if you will.

And... I've also totally made a style sheet for this project even though it's not really needed because I think it's important to keep with directory structure in general. Maybe I will need a stylesheet later on and referencing it now will hopefully make my life easier in the future. Also, I totally want to avoid writing HTML as much as I can because it's ugly and annoying to deal with.

## Day 2

Today I decided I would really start. Yeah, I know it's taken a week for me to start anything and I've been busy trying to fix the clusterfuck that is my personal website...*sigh*

I had forgotten to write an axes and that is pretty much why it didn't show up the first day I worked on this.

I've now created an `axes.js` that has an axis in it. I'll be able to call an axis whenever I want now with the `createAxes(length, name)` function!

I've also created a `horse.js` which currently has 3 functions in it.
- `createHorseBody()`
This creates the body of my horse.

- `createHorseLeg(positionX, positionY, positionZ)`
This creates a single leg of a horse for which you can put in positions to put the leg where ever you want

- `function createHorseHead()`
This creates a head for the horse.

The great thing about knowing how to program better is I actually know how to name variables and functions correctly so I don't confuse myself and whoever is reading my code.

I'm currently looking at `horse.js` and I'm thinking that perhaps I'll need to refactor it a bit. I'm repeating code that doesn't need to be repeated and I think I could perhaps create a `createHorse()` function that will create an entire horse! Maybe I'll just have lots of horses of different sizes dotted around the scene because why the hell not.

###### Browser Comments
One thing I do have to say about all this `three.js` stuff is that holy shit Firefox is a piece of crap for rendering!!! It looks like utter crap in Firefox. Which is a shame because I enjoy using Firefox a lot. It's my main browser but I've been thinking for ages that I should just make the switch back to Google Chrome instead of waiting for Firefox to ship the new version that will eventually change my negative views.

***Firefox Rendering***

![Firefox Rendering](/src/img/firefox_rendering.png?raw=true "Firefox Rendering")

***Chrome Rendering***

![Chrome Rendering](/src/img/chrome_rendering.png?raw=true "Chrome Rendering")

***As you can see it looks like I've drawn it in PaintMS for the Firefox version whereas the Chrome version is much smoother and shows the real potential of using three.js.***

I've found that changing the type of material shader I use also helps to improve the look of the object when it's rendered.

Using `MeshLambertMaterial` instead of `MeshBasicMaterial` improves the rendering by a heap. It also looks way nicer.
