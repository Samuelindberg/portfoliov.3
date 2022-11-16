
const introduction = document.getElementById("description");
const wrapper = document.querySelector(".wrapper");
const workTitle = document.getElementById("work-title");
const profilePic = document.getElementById("profile-img");
wrapper.addEventListener("scroll",()=>{
    console.log(wrapper.scrollTop);
    let posY = wrapper.scrollTop;
  
    if(wrapper.scrollTop<1123){
    introduction.style.transform="translate("+posY+"px,"+posY/1.5+"px)";
    introduction.style.opacity=1-wrapper.scrollTop/1000;
    }
    if(posY>586 && 1700>posY){
     workTitlePosition(posY);
    } 
});

function introductionMovement(posY){ 
    introduction.style.transform="translate("+posY+"px,"+posY/1.5+"px)";
introduction.style.opacity=1-wrapper.scrollTop/1000;
}
function workTitlePosition(posY){
    if(posY>1800){
        alert("test");
    }
        workTitle.style.transform="translate("+(posY-586.5)+"px,"+(posY-586.5)/2+"px)";
        profilePic.style.opacity=1-(posY-350)/1000; 
        if(posY<2490 && posY>1686){
            workTitle.style.color="#60A9DD";
            workTitle.innerHTML="MYRORNA VINTAGE";
        }
        else{
            workTitle.style.color="white";
            workTitle.innerHTML="WORKS";
        }
        
}