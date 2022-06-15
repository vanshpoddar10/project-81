canvas=document.getElementById("mycanvas")

color="blue"
ctx=canvas.getContext("2d")
ctx.beginPath()
ctx.lineWidth=3
ctx.strokeStyle=color
ctx.arc(250,200,39,0,2*Math.PI)
ctx.stroke()

color="black"
ctx=canvas.getContext("2d")
ctx.beginPath()
ctx.lineWidth=3
ctx.strokeStyle=color
ctx.arc(350,200,39,0,2*Math.PI)
ctx.stroke()

color="red"
ctx=canvas.getContext("2d")
ctx.beginPath()
ctx.lineWidth=3
ctx.strokeStyle=color
ctx.arc(450,200,39,0,2*Math.PI)
ctx.stroke()

color="yellow"
ctx=canvas.getContext("2d")
ctx.beginPath()
ctx.lineWidth=3
ctx.strokeStyle=color
ctx.arc(300,240,39,0,2*Math.PI)
ctx.stroke()

color="green"
ctx=canvas.getContext("2d")
ctx.beginPath()
ctx.lineWidth=3
ctx.strokeStyle=color
ctx.arc(400,240,39,0,2*Math.PI)
ctx.stroke()

color="blue"
ctx=canvas.getContext("2d")
ctx.beginPath()
ctx.lineWidth=3
ctx.strokeStyle=color
ctx.rect(140,130,430,200)
ctx.stroke()





