# p5.blender

`p5.blender` is a simple yet powerful p5.js library designed for realistic color mixing in web graphics. By integrating [Spectral.js](https://github.com/rvanwijnen/spectral.js) by Ronald van Wijnen into p5.js, it overcomes traditional RGB limitations, allowing for more natural color blends – for instance, mixing blue and yellow to make green.

This library utilizes a shader approach for color blending and is optimized for performance and ease of use within the p5.js environment.

## Features

- Realistic color blending in WEBGL mode.
- Simple integration with standard p5.js drawing functions.
- Flexibility in color specification, including RGB and HEX formats.

## Getting Started

### Installation

Include the `p5.blend.js` file in your HTML file to use the library. The library requires p5.js to be already included in your project.

### Basic Usage

1. **Create a WEBGL Canvas**: Start by creating a canvas in WEBGL mode in your p5.js sketch.
2. **Set Colors**: Use `blender.color(r, g, b, a)` to set the color and alpha for drawing shapes. The color can be changed as needed throughout your sketch.
3. **Drawing Shapes**: Draw shapes normally as you would in p5.js. The specified blend color will be applied.
4. **Switching Back**: To stop color blending and return to normal p5.js canvas mode, call `blender.noBlend()`. This should be done before finishing your sketch to ensure proper canvas state.

### Example

For a practical example of using `p5.blender`, visit this sketch by @LukaPiskorec: [p5.js Web Editor Sketch](https://editor.p5js.org/lukapiskorec/sketches/qgOMR7xIF).

## API Reference

### `blender.load(buffer)`

- **Description**: Call `load(buffer)` to initialize the color mixer on selected buffers.
- **Usage**: This function should be called whenever you switch to a different buffer and intend to use color blending.

### `blender.color()`

- **Usage**:
  - **Two arguments** `(color, alpha)`: Specify color using a HEX code, `[r, g, b]` array, or a p5.color object.
  - **Three arguments** `(r, g, b)`: Alpha defaults to 1.0 for full opacity.
  - **Four arguments** `(r, g, b, alpha)`: Specify RGBA values directly.

### `blender.noBlend()`

- **Description**: Call `noBlend()` to stop blending and revert to the normal p5.js drawing mode.

## Performance Tips

- **Optimize Color Changes**: The `color()` function applies a shader each time it's called. To enhance performance, minimize the frequency of color changes and group shapes with the same color where possible.

## Limitations

- **Shader Application**: Due to the shader-based approach, excessive color changes within a sketch might impact performance. Plan your color usage strategically for optimal results.
