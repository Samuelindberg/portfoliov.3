
const introduction = document.getElementById("description");
const wrapper = document.querySelector(".wrapper");

// window.addEventListener(scroll,(event)=>{
//     console.log("test");
//     // let posY = window.pageYOffset;
//     // introduction.style.color="blue";
    
// }
// );  
wrapper.addEventListener("scroll",()=>{
    console.log(wrapper.scrollTop);
    introduction.style.transform="translate("+wrapper.scrollTop+"px,0px)";
});

function scrollHor(){
  
    console.log("test");
}

