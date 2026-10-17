const PASSCODE="0718";
const startDate=new Date("2026-07-18T00:00:00+08:00");
const photos=[
 {src:"photos/photo1.jpg",cap:"Isa sa mga memories natin na gusto kong balikan 💗"},
 {src:"photos/photo2.jpg",cap:"Kahit malayo, ikaw pa rin yung nagpapasaya sa akin hehe"},
 {src:"photos/photo3.jpg",cap:"Ang cute mo po dito, misis ko 🥹"},
 {src:"photos/photo4.jpg",cap:"More memories pa sana tayong dalawa ♡"},
 {src:"photos/photo5.jpg",cap:"Ikaw at ikaw pa rin po 💗"},
 {src:"photos/photo6.jpg",cap:"Excited na ako sa araw na hindi na screen ang pagitan natin"},
 {src:"photos/photo7.jpg",cap:"Love na love kita, misis kooo 🌷"}
];
let index=0;
const $=s=>document.querySelector(s);
$("#open").onclick=()=>{$("#open").classList.add("hidden");$("#lock").classList.remove("hidden");$("#pass").focus()};
function unlock(){if($("#pass").value===PASSCODE){$("#gate").classList.add("hidden");$("#main").classList.remove("hidden");hearts(14)}else{$("#error").textContent="Try mo po yung special date natin hehe 💗";$("#pass").value=""}}
$("#unlock").onclick=unlock;$("#pass").addEventListener("keydown",e=>{if(e.key==="Enter")unlock()});
function render(){const img=$("#photo");img.src=photos[index].src;$("#caption").textContent=photos[index].cap;img.onerror=()=>{img.alt="Photo file missing";};document.querySelectorAll("#dots button").forEach((b,i)=>b.classList.toggle("active",i===index))}
photos.forEach((p,i)=>{let b=document.createElement("button");b.onclick=()=>{index=i;render()};$("#dots").appendChild(b)});
$("#prev").onclick=()=>{index=(index+photos.length-1)%photos.length;render()};$("#next").onclick=()=>{index=(index+1)%photos.length;render()};render();
function counter(){let d=Math.max(0,Date.now()-startDate.getTime());$("#days").textContent=Math.floor(d/86400000);d%=86400000;$("#hours").textContent=Math.floor(d/3600000);d%=3600000;$("#minutes").textContent=Math.floor(d/60000);$("#seconds").textContent=Math.floor(d%60000/1000)}counter();setInterval(counter,1000);
const msgs=[
"Ikaw pa rin po ang pipiliin ko, hindi lang kapag masaya ang lahat kundi pati kapag may pinagdadaanan tayo 💗",
"Gusto kong matutong mas intindihin ka, pakinggan ka, at maging patient sa atin kahit may times na hindi tayo nagkakaintindihan 🌷",
"Pangarap ko po yung araw na magkikita tayo, makakasama kita, at unti-unti nating mabubuo yung future na pinagdarasal natin 🏡",
"Ipagdadasal ko po palagi ikaw, tayo, at ang mga pamilya natin kay Papa God 🙏"
];
document.querySelectorAll(".promises button").forEach((b,i)=>b.onclick=()=>{$("#promiseText").textContent=msgs[i];hearts(6)});
const lines=["Mahal na mahal kita, misis kooo 💗","Ikaw pa rin po, palagi hehe 🥹","Hug kita nang mahigpit kapag magkasama na tayo 🤗","Thank you po for being you, misis ko 🌷"];let li=0;
$("#love").onclick=()=>{$("#loveText").textContent=lines[li++%lines.length];hearts(18)};
function hearts(n){for(let i=0;i<n;i++)setTimeout(()=>{let h=document.createElement("span");h.className="heart";h.textContent=["💗","💕","♡","🌷"][Math.floor(Math.random()*4)];h.style.left=Math.random()*100+"vw";h.style.fontSize=(16+Math.random()*18)+"px";$("#hearts").appendChild(h);setTimeout(()=>h.remove(),4000)},i*65)}
