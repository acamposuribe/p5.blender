# p5.blender
Simple p5js library for realistic color-mixing. Blue + Yellow is finally Green.

This shader applies Spectral.js (https://github.com/rvanwijnen/spectral.js) by Ronald van Wijnen to p5js, via a mask shader.
It allows for fast and realistic color-blending, using the basic p5js functions.


# Usage
After adding the p5.blend.js to your html file:

- Use blender.color(r,g,b,a) to set the color and alpha of the following shapes
- Draw normally
- Use blender.color(r,g,b,a) again when you want to change the color
- When you are done blending, execute blender.noBlend(). This will allow you to go back to normal canvas mode. Make sure you always execute this function before finishing your sketch.

  Example: https://editor.p5js.org/acamposuribe/sketches/VF5GV7vH7


# Functions

- blender.load(buffer)

  Use load() to load the mixer in selected buffers. Execute the function each time you want to change to said buffer.
  

- blender.color()

  With two arguments (color, alpha) - use HEX code, [r,g,b] array, or p5.color objct.

  With three arguments (r,g,b) - alpha will be 1.0 (full blend).

  With four arguments (r,g,b,alpha)
  

- blender.noBlend()

  Use noBlend() when you want to stop blending and change to normal p5 mode.


# Limitations
Each time the color() function is called, the library will apply a shader. In order to make it more performant, try to change colors sparingly, grouping the shapes accordingly.
