function setup() {
    createCanvas(400,400,WEBGL) // Canvas needs to be WEBGL
    background(240)

    // Execute blender.blend to set color and alpha
    // You can also do (r,g,b,a)
    blender.color("#002185", 100)
    rect(-150,-150,200,200)
    
    blender.color("#fcd300", 100)
    rect(-50,-50,200,200)
}