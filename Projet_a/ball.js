let canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = innerHeight
let ctx = canvas.getContext("2d")
ctx.beginPath()
ctx.arc(150,150,50,0,2 * Math.PI)
ctx.fill()
let x, y,flag
x = 3000
y = 2900
flag = true
window.setInterval(() => {
    if (flag == true){
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
        ctx.beginPath()
        ctx.arc(x,y,50,0,2 * Math.PI)
        ctx.fill()
        y--
        if (y == 1000) {
            flag = false
        }
    }
    else {
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
        ctx.beginPath()
        ctx.arc(x,y,50,0,2 * Math.PI)
        ctx.fill()
        y++
        if (y == 2900){
            flag = true       
        }
    }
    },1)