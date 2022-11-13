const nameTitle = document.getElementById("name");
const profileImg = document.getElementById("profile-img");
const introDesc = document.getElementById("introduction");

window.addEventListener("scroll",()=>{
nameScrollposition();  
});

function nameScrollposition(){
   let posY = window.pageYOffset;
   nameTitle.style.transform="translate(0,"+ posY +"px)";
   profileImg.style.transform="translate(0,+"+ posY/4 +"px)";
   introDesc.style.transform="translate(0,-"+ posY*2 +"px)";


}