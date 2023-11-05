# p5.blender
Simple library that applies Spectral.js to p5js for realistic color-mixing

This shader applies Spectral.js (https://github.com/rvanwijnen/spectral.js) by Ronald van Wijnen to p5js, via a mask shader.
It allows for fast and realistic color-blending, using the basic p5js functions.

# Usage
After adding the p5.blend.js to your html file:

- Use blender.color(r,g,b,a) to set the color and alpha of the following shapes
- Draw normally
- Use blender.color(r,g,b,a) again when you want to change the color
- When you are done blending, execute blender.noBlend(). This will allow you to go back to normal canvas mode. Make sure you always execute this function before finishing your sketch.

  Example: https://editor.p5js.org/acamposuribe/sketches/VF5GV7vH7

# Functioning and Limitations
Each time the color() function is called, the library will apply a shader. In order to make it more performant, try to change color sparingly, grouping the shapes by color.
