// const nameTitle = document.getElementById("name");
// const profileImg = document.getElementById("profile-img");
// const introDesc = document.getElementById("introduction");
// const workTitle = document.getElementById("work-title");
// const myrorna = document.getElementById("myrorna");
// const cicada = document.getElementById("cicada");
// const tiktactoe = document.getElementById("tiktactoe");

// window.addEventListener("scroll",()=>{
// nameScrollposition();  
// });
// function nameScrollposition(){
//    let posY = window.pageYOffset;
// if(posY<1095){
//   firstPageScroll();
// }

//   if(posY>1000){
//     workTitle.style.transform = "translate(0,"+ (posY-1000) +"px)";
//   }
//   else{
//     nameTitle.style.transform="translate(0,"+ posY/1.6 +"px)";
//   }

//   if(posY>1395 && posY<1580){
//     myrorna.style.transform = "translate(0,"+ (posY-1395) +"px) scale("+(100+(posY-1395)/20)+"%)";
//     workTitle.innerHTML="MYRORNA VINTAGE";
//   } else if(posY>1580){
//     workTitle.innerHTML="WORKS";
//   }
//   if(posY>3257 && posY<3444){
//     workTitle.innerHTML="VEGAN CICADA";
//     workTitle.style.color="#CBF151";
//     cicada.style.transform = "translate(0,"+ (posY-3257) +"px) scale("+(100+(posY-3257)/20)+"%)";
//   } else if(posY>3444){
//     workTitle.style.color="white";
//     cicada.style.transform="translate(-"+((posY-3444)*2)+" px,)";
//   }
//   if(posY>4319.5 && posY<4467){
//     tiktactoe.style.transform = "translate(0,"+ (posY-4319.5) +"px) scale("+(100+(posY-4319.5)/20)+"%)";
//     workTitle.innerHTML="TIC TAC TOE";
//   }
//   console.log(posY);
// }

// function firstPageScroll(){
//   let posY = window.pageYOffset;
//     profileImg.style.transform="translate(0,"+ posY/4 +"px)";
//     introDesc.style.transform="translate("+posY/2+"px,0px)";
//     introDesc.style.opacity=1-posY/800;
// }

