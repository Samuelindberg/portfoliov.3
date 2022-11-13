const nameTitle = document.getElementById("name");
const profileImg = document.getElementById("profile-img");
const introDesc = document.getElementById("introduction");
const workTitle = document.getElementById("work-title");
const myrorna = document.getElementById("myrorna");
const cicada = document.getElementById("cicada");

window.addEventListener("scroll",()=>{
nameScrollposition();  
});
function nameScrollposition(){
   let posY = window.pageYOffset;

   if(posY<1095){
    profileImg.style.transform="translate(0,"+ posY/4 +"px)";
    introDesc.style.transform="translate("+posY/2+"px,0px)";
    introDesc.style.opacity=1-posY/800;
   } 
  
  if(posY>1000){
    workTitle.style.transform = "translate(0,"+ (posY-1000) +"px)";
  }
  else{
    nameTitle.style.transform="translate(0,"+ posY/1.6 +"px)";
  }

  if(posY>1395 && posY<1804){
    myrorna.style.transform = "translate(0,"+ (posY-1395) +"px) scale("+(100+(posY-1395)/20)+"%)";
    workTitle.innerHTML="MYRORNA VINTAGE";
  } else if(posY>1892){
    workTitle.innerHTML="WORKS";
  }
  if(posY>3269){
    workTitle.innerHTML="VEGAN CICADA";
    workTitle.style.color="#CBF151";
    cicada.style.transform = "translate(0,"+ (posY-3269) +"px) scale("+(100+(posY-3269)/20)+"%)";
  }
  console.log(posY);
}
