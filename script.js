
const introduction = document.getElementById("description");
const wrapper = document.querySelector(".wrapper");
const workTitle = document.getElementById

// window.addEventListener(scroll,(event)=>{
//     console.log("test");
//     // let posY = window.pageYOffset;
//     // introduction.style.color="blue";
    
// }
// );  
wrapper.addEventListener("scroll",()=>{
 
    introduction.style.transform="translate("+wrapper.scrollTop+"px,"+wrapper.scrollTop+"px)";
});

function scrollHor(){
  
    console.log("test");
}

