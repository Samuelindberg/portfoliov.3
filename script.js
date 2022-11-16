
const introduction = document.getElementById("description");
const wrapper = document.querySelector(".wrapper");
const workTitle = document.getElementById("work-title");
const profilePic = document.getElementById("profile-img");
wrapper.addEventListener("scroll",()=>{
    console.log(wrapper.scrollTop);
    let posY = wrapper.scrollTop;
  
    if(wrapper.scrollTop<1123){
    //    introductionMovement(posY);
    introduction.style.transform="translate("+posY+"px,"+posY/1.5+"px)";
    introduction.style.opacity=1-wrapper.scrollTop/1000;
    }
    if(posY>350){
     workTitlePosition(posY);
    } 
    else{
    }
});

function introductionMovement(posY){ 
    introduction.style.transform="translate("+posY+"px,"+posY/1.5+"px)";
introduction.style.opacity=1-wrapper.scrollTop/1000;
}
function workTitlePosition(posY){
   workTitle.style.transform="translate("+(posY-350)+"px,"+(posY/1.3-350)+"px)";
}