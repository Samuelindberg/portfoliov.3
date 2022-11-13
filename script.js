const nameTitle = document.getElementById("name");
const profileImg = document.getElementById("profile-img");
const introDesc = document.getElementById("introduction");
const workTitle = document.getElementById("work-title");

window.addEventListener("scroll",()=>{
nameScrollposition();  
});

function nameScrollposition(){
   let posY = window.pageYOffset;
   introDesc.style.opacity=1-posY/800;
   profileImg.style.transform="translate(0,"+ posY/4 +"px)";
   introDesc.style.transform="translate("+posY/2+"px,0px)";
   

  if(posY>1050){
    workTitle.style.transform = "translate(0,"+ (posY-1050) +"px)";
  }
  else{
    nameTitle.style.transform="translate(0,"+ posY/1.6 +"px)";
  }





   console.log(posY);


}