const canvas = document.getElementById('canvas');
const bg = canvas.getContext('2d');
canvas.width = 1900;
canvas.height = window.innerHeight;



//이미지
//자바
const imgs = [
    new Image(),new Image(),new Image(),new Image(),
    new Image(),new Image(),new Image(),new Image()
];
imgs[0].src = 'imgsrc/java.gif';
imgs[1].src = 'imgsrc/spring.svg';
//마리아db , mySQL , oracleSQL , Postgres
imgs[2].src = 'imgsrc/RDBMS2.png'
imgs[3].src = 'imgsrc/oracleSQL.jpg'
imgs[4].src = 'imgsrc/postgre.png'
//C , python
imgs[5].src = 'imgsrc/C.png'
imgs[6].src = 'imgsrc/phython.png'
//javaScript
imgs[7].src = 'imgsrc/javascript.png'
//node.js

class Java{
    constructor(){
        this.x = 1920;
        this.y = 10;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        bg.drawImage(imgs[0] , this.x , this.y , imgs[0].width*0.3,imgs[0].height*0.3);
    }
}

class JavaScript{
    constructor(){
        this.x = 1920;
        this.y = 10;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        bg.drawImage(imgs[7] , this.x+500 , this.y , imgs[7].width*0.2,imgs[7].height*0.2);
    }
}

class Spring{
    constructor(){
        this.x = 1920;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        // bg.fillStyle = 'green';
        // bg.textAlign = "center";
        // bg.font = "italic bold 20px sans-serif";
       // bg.drawImage(arrtxt[0], this.x+70, this.y+100);
        bg.drawImage(imgs[1], this.x+70, this.y+50);
        // bg.textAlign = "center";
        // bg.fillStyle = 'black';
        // bg.fillText(arrtxt[1], this.x+60, this.y+150);
    }
}

class RDBMS{
    constructor(){
        this.x = 1920;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        bg.drawImage(imgs[2] , this.x+80 , this.y+150 , imgs[2].width*0.3,imgs[2].height*0.3);
        bg.drawImage(imgs[3] , this.x+100 , this.y , imgs[3].width*0.8,imgs[3].height*0.8);
        bg.drawImage(imgs[4] , this.x-200 , this.y-80 , imgs[4].width*0.3,imgs[4].height*0.3);
    }
}

class C_Py_Js{
    constructor(){
        this.x = 1920;
        this.y = 850;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        bg.drawImage(imgs[5] , this.x+450 , this.y , imgs[5].width*0.135,imgs[5].height*0.135);
        bg.drawImage(imgs[6] , this.x-200 , this.y , imgs[6].width*0.5,imgs[6].height*0.5);
    }
}


let timer = 0;
let skillStacks = [];
let skillStacks2 = [];
let skillStacks3 = [];
let skillStacks4 = [];
let skillStacks5 = [];
let stopSpace;
function playOnframe(){
    //fps에따른실행 - 모니터따라 달라질수도 있을거같음
    stopSpace = requestAnimationFrame(playOnframe);

    timer++;
    bg.clearRect(0,0, canvas.width, canvas.height);
    if(timer % 260 ===0){
        const java = new Java();
        skillStacks.push(java);
    }else if(timer < 2){
        const java = new Java();
        skillStacks.push(java);
    }

    if(timer % 588 ===0){
        const spring = new Spring();
        skillStacks2.push(spring);
    }

    if(timer % 1088 ===0){
        const rdbms = new RDBMS();
        skillStacks3.push(rdbms);
    }else if(timer < 2){
        const rdbms = new RDBMS();
        skillStacks3.push(rdbms);
    }

    if(timer % 260 === 0 ){
        const c_py_js = new C_Py_Js();
        skillStacks4.push(c_py_js);
    }
    
    if(timer % 260 ===0){
        const javascript = new JavaScript();
        skillStacks5.push(javascript);
    }else if(timer < 2){
        const javascript = new JavaScript();
        skillStacks.push(javascript);
    }

    //skillStack끝에 닿으면 삭제하기 - 렉걸림

    skillStacks.forEach((e , i , o)=>{
        if(e.x < -10){
            o.splice(i,1);
        }
        e.x-=4;
        e.draw();
    })

    skillStacks2.forEach((e , i , o)=>{
        if(e.x < -1000){
            o.splice(i,1);
        }
        e.x-=3;
        e.draw();
    })

    skillStacks3.forEach((e , i , o)=>{
        if(e.x < -10){
            o.splice(i,1);
        }
        e.x-=1;
        e.draw();
    })

    skillStacks4.forEach((e , i , o)=>{
        if(e.x < -10){
            o.splice(i,1);
        }
        e.x-=5;
        e.draw();
    })

    skillStacks5.forEach((e , i , o)=>{
        if(e.x < -500){
            o.splice(i,1);
        }
        e.x-=4;
        e.draw();
    })
}//create by nxx5xxx
playOnframe();

function stopMoving(){
    cancelAnimationFrame(stopSpace);
    $("#spaceSw").val('다시시작');
    $("#spaceSw").removeAttr('onclick');
    $("#spaceSw").attr('onclick','startMoving()');
}

function startMoving(){
    $("#spaceSw").val('멈추기');
    playOnframe();
    $("#spaceSw").removeAttr('onclick');
    $("#spaceSw").attr('onclick','stopMoving()');
}
function clearAll(){
    skillStacks.splice(0,skillStacks.length)
    skillStacks2.splice(0,skillStacks2.length)
    skillStacks3.splice(0,skillStacks3.length)
    skillStacks4.splice(0,skillStacks4.length)
    skillStacks5.splice(0,skillStacks5.length)
}
//바탕애니메이션 멈추고 움직이게

//타이핑효과
//타이핑속도
let typingspd = 100;
$(function(){
    let cnt = 0;
    let sp1_text = $(".sp1").text().split("");
    let typingStatus = false; // false 아직 타이핑안됨
    let typ_interval;
    if(typingStatus==false){
        typ_interval = setInterval(goTyping, typingspd);
    }
    function goTyping(){
        if(cnt < sp1_text.length ){
            $(".sp1_typing").append(sp1_text[cnt]);
            cnt++;
            //console.log(cnt);
        }else{
            //console.log('스탑');
            typingStatus=true;
            clearInterval(typ_interval);
        }
    }
})

