
const introduction = document.getElementById("description");
const wrapper = document.querySelector(".wrapper");
const workTitle = document.getElementById("work-title");
const profilePic = document.getElementById("profile-img");
const nameTitle = document.getElementById("name");
const myrorna = document.getElementById("myrorna");
let nameAnimationArray = ["S","a","m","u","e","l "," L","i","n","d","b","e","r","g"];
let letterNumber = 0;

function delay(i){
        document.getElementById("name").innerHTML += nameAnimationArray[i];
} 
    for(let i=0;i<nameAnimationArray.length;i++){
        setTimeout(delay(i), 3000),i;
    }



wrapper.addEventListener("scroll",()=>{
    console.log(wrapper.scrollTop);
    let posY = wrapper.scrollTop;
  
    if(wrapper.scrollTop<1123){
    introduction.style.transform="translate("+posY+"px,"+posY/1.5+"px)";
    introduction.style.opacity=1-wrapper.scrollTop/1000;
    }
    if(posY>400){
        profilePic.style.opacity=1-(posY-400)/1000; 
        // myrorna.style.opacity=1-(posY-400)/500;

    }
    if(posY>1332){
     workTitlePosition(posY);
    } 
});

function introductionMovement(posY){ 
    introduction.style.transform="translate("+posY+"px,"+posY/1.5+"px)";
introduction.style.opacity=1-wrapper.scrollTop/1000;
}
function workTitlePosition(posY){
       if(posY<2363){
         workTitle.style.transform="translate("+(posY/0.9-586.5)+"px,"+(posY-586.5)/1.2+"px)";
       }
       else{
         workTitle.style.transform="translate3d(130rem,0px,-80px) scale(9)";
       }
       if(posY>4554){
        workTitle.style.opacity=1-(posY-4554)/500;
       }
       
        
        if(posY<2490 && posY>1686){
            // workTitle.style.color="#60A9DD";
            // workTitle.innerHTML="MYRORNA VINTAGE";
        }
        else{
            workTitle.style.color="white";
            workTitle.innerHTML="WORKS";
        }
        
}