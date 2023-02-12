const backEl=document.getElementById('main')
const nameEl=document.getElementById('name')
const firstEl=document.getElementById('first')
const name1El=document.getElementById('second')
const nameE2l=document.getElementById('third')
const nameE3l=document.getElementById('fourth')
const nameE4l=document.getElementById('fifth')

function codeGenerator(){
    let string='0123456789abcdef'
    let color="#"
    for(let i=0;i<6;i++){
        let num= Math.floor(Math.random()*string.length)
        color+=string[num]
    }
    return color
    }
    
    setInterval(()=>{
            let color = codeGenerator()
            nameEl.style.color=codeGenerator()
            firstEl.style.backgroundColor=color
            name1El.style.backgroundColor=color
            nameE2l.style.backgroundColor=color
            nameE3l.style.backgroundColor=color
            nameE4l.style.backgroundColor=color
            
    },1000)