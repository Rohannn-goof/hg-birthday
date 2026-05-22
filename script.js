// NO BUTTON RUNS AWAY 😈

let no = document.getElementById("noBtn");

no.addEventListener("mouseover",()=>{

let x=Math.random()*(window.innerWidth-200);

let y=Math.random()*(window.innerHeight-100);

no.style.position="absolute";

no.style.left=x+"px";

no.style.top=y+"px";

});



// FLOATING HEARTS 💖

for(let i=0;i<35;i++){

let heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(Math.random()*5+5)+"s";

heart.style.fontSize=
(Math.random()*25+15)+"px";

document.body.appendChild(heart);

}



// STARS ✨

for(let i=0;i<50;i++){

let star=document.createElement("div");

star.classList.add("star");

star.innerHTML="✨";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize=
(Math.random()*20+10)+"px";

star.style.animationDuration=
(Math.random()*3+1)+"s";

document.body.appendChild(star);

}



// BALLOONS 🎈

let colors=["🎈","🎉","💝","🎊"];

for(let i=0;i<20;i++){

let b=document.createElement("div");

b.classList.add("balloon");

b.innerHTML=
colors[
Math.floor(
Math.random()*colors.length
)
];

b.style.left=
Math.random()*100+"vw";

b.style.animationDuration=
(Math.random()*10+8)
+"s";

document.body.appendChild(b);

}



// GIANT GLOWING CIRCLES

let c1=document.createElement("div");

c1.className="circle1";

document.body.appendChild(c1);


let c2=document.createElement("div");

c2.className="circle2";

document.body.appendChild(c2);




// CORNER RIBBONS

let r1=document.createElement("div");

r1.className="ribbon r1";

document.body.appendChild(r1);


let r2=document.createElement("div");

r2.className="ribbon r2";

document.body.appendChild(r2);




// RANDOM DECORATIVE SHAPES

let shapes=["⭐","💎","✨","💖","🌸"];

for(let i=0;i<30;i++){

let s=document.createElement("div");

s.className="shape";

s.innerHTML=
shapes[
Math.floor(
Math.random()*shapes.length
)
];

s.style.left=
Math.random()*100+"vw";

s.style.top=
Math.random()*100+"vh";

s.style.fontSize=
(Math.random()*40+15)+"px";

s.style.animationDuration=
(Math.random()*10+5)+"s";

document.body.appendChild(s);

}




// YES BUTTON -> PAGE 2 💌

document.getElementById("yesBtn").onclick=()=>{

document.body.innerHTML=`

<div id="page2">

<div class="glowRing"></div>

<h1 class="surpriseTitle">

Open your surprise 💌

</h1>

<p class="smallText">

Someone prepared something for you...

</p>

<div id="envelope">

<div class="top"></div>

<div class="letter">

<h2>Click Me 💖</h2>

</div>

</div>

</div>

`;

};




// ENVELOPE OPENS 💌

document.addEventListener("click",(e)=>{

if(e.target.closest("#envelope")){

let env=
document.getElementById("envelope");

env.classList.add("open");


setTimeout(()=>{

document.body.innerHTML=`

<div id="messagePage">

<img src="images/her1.jpeg" class="photo p1">
<img src="images/her2.jpeg" class="photo p2">
<img src="images/her3.jpeg" class="photo p3">
<img src="images/her4.jpeg" class="photo p4">

<h1>
Happy Birthday ❤️
</h1>

<div class="messageBox">

Happy Birthday ❤️

Today is your day, and no matter how much time passes, I couldn't let it arrive without making something for you. You’ve been a very special part of my life — in ways I don't think simple words can fully explain. Through memories, laughs, chaos, silence, and everything in between, you somehow became someone my heart never really learned to treat as ordinary.

I don’t know what life has planned ahead for us, but I do know this: meeting you became one of the most meaningful chapters of my life. I’m grateful for every memory, every smile, and every little moment — even the ones you probably forgot.

I hope this year brings you the kind of happiness that finds you unexpectedly, stays longer than you expect, and makes you smile for no reason. You deserve love, peace, success, and all the beautiful things life can give.

And today, more than anything — I just hope you smile.

Happy 22nd Birthday, Mariya ! 💖

</div>

<button id="nextPage">

Open 22 Reasons 🎈

</button>

</div>
`;

},1800);

}

});
document.addEventListener("click",(e)=>{

if(e.target.id=="nextPage"){

let balloons="";

for(let i=1;i<=22;i++){

balloons+=`

<div class="balloonCard"
data-id="${i}">

🎈

<span>${i}</span>

</div>

`;

}

document.body.innerHTML=`

<div id="page3">

<h1>

22 Reasons Why You Make My Day ❤️

</h1>

<div id="balloonContainer">

${balloons}

</div>

<div id="reasonBox">

Click a balloon 😭🎈

</div>

<button id="nextPage">

Open 22 Reasons 🎈

</button>

</div>

`;
}

});



let reasons=[

"Your smile somehow fixes my mood 😭",

"Talking to you instantly makes an ordinary day better",

"Your random messages always hit at the right time",

"You have a way of making things feel lighter",

"Your laugh is unfairly contagious",

"Even your chaos is weirdly comforting",

"The little things you do stay in my mind",

"You make boring moments feel special",

"Your energy changes the whole vibe",

"Your reactions are always cute 😭",

"You make memories out of normal moments",

"You somehow understand things without me explaining everything",

"Your kindness never goes unnoticed",

"Your presence feels like comfort",

"You make me smile without even trying",

"You make bad days feel less bad",

"Your existence genuinely makes life brighter",

"You have a way of staying on my mind",

"You make silence feel less empty",

"You became a part of my favorite memories",

"Some people just matter differently... and you're one of them",

"And reason 22...? Because somehow, after all this time... you still make my day ❤️"

];



document.addEventListener("click",(e)=>{

if(e.target.closest(".balloonCard")){

let balloon=
e.target.closest(".balloonCard");

let n=
balloon.dataset.id;

balloon.style.opacity="0";

balloon.style.scale=".5";

document.getElementById(
"reasonBox"
)
.innerHTML=
reasons[n-1];

}

});