score=0;
cross=true;
audiogo=new Audio('gameover.mp3');
audio=new Audio('music.mp3');
setTimeout(()=>{
    audio.play()
},1000);
document.onkeydown=function(e){
    console.log("Key Code is: ",e.keyCode)
    if(e.keyCode==38)
    {
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        },700);
    }
    if(e.keyCode==39)
    {
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left=dinoX+122+"px"
    }
    if(e.keyCode==37)
    {
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left=dinoX-122+"px"
    }
}
setInterval(()=>{
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'))
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'))
    offsetX=Math.abs(dx-ox)    
    offsetY=Math.abs(dy-oy)    
    if(offsetX<73&&offsetY<50){
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if(offsetX<145&&cross){
        score+=1
        updateScore(score)
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);
        setTimeout(()=>{
            aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'))
            newDurr=aniDur-0.8;
            obstacle.style.animationDuration=newDurr+'s';
        },500)
    }
},10);
function updateScore(){
    scoreCont.innerHTML="Your Score "+score
}