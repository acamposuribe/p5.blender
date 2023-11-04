function setup() {
    createCanvas(400,400,WEBGL) // Canvas needs to be WEBGL
    background(220)
    noStroke()
    
    // Execute blender.blend to set color and alpha
    // You can also do (r,g,b,a)
    blender.blend("#002185", 100)
    rect(-150,-150,200,200)
    
    blender.blend("#fcd300", 100)
    rect(-50,-50,200,200)

    // Execute this function when you are done mixing, and want to go back to normal colors/lines
    blender.noBlend()
}