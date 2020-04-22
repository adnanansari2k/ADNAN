

var socket;


function setup(){

createCanvas(windowWidth,windowHeight)

background("red")
socket = io.connect("http://localhost:3000")

socket.on("msg",drawing)


}


function drawing(data){
console.log("Got: " + data.x + " " + data.y);
	fill("blue")
ellipse(data.x,data.y,50,50)
	
}



function mouseDragged(){

var data={

	x:mouseX,
        y:mouseY

}

console.log(data)

ellipse(mouseX,mouseY,50,50)
socket.emit("msg",data)


}

function draw(){





}
