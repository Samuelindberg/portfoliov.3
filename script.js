// // myovies
// const myoviesArrowLeft = document.getElementById("myovies-slideleft");
// const myoviesArrowRight = document.getElementById("myovies-slideright");
const MyoviesImg = document.getElementById("myovies-img-container");
const myoviesImgUrl = [
  "intro-page-nosearch.png",
  "myovies-startpage.png",
  "myovies-favorites.png",
  "myovies-searchpage.png",
  "myovies-rating.png",
];
let myoviesNumber = 0;
// tictactoe
const tictactoeArrowLeft = document.getElementById("tictactoe-slideleft");
const tictactoeArrowRight = document.getElementById("tictactoe-slideright");
const tictactoeImg = document.getElementById("tictactoe-img-container");
const tictactoeImgUrl = [
  "tictactoe-input",
  "tictactoe-introvideo.mp4",
  "tictactoe-gamevideo.mp4",
];
const tictactoevideo = document.getElementById("tictactoe-video");
let tictactoeNumber = 0;
// hamburger menu
const hamburgerbutton = document.querySelector('#menu-button');
  const hamburgermenu = document.querySelector('#mobile-menu');

// myoviesArrowLeft.addEventListener("click", () => {
//   MyoviesImg.style.opacity = 0;
//   setTimeout(() => {
//     MyoviesImg.style.opacity = 1;
//     if (!myoviesNumber == 0 || myoviesNumber == 3) {
//       myoviesNumber -= 1;
//     } else {
//       myoviesNumber = 4;
//     }
//     console.log(myoviesNumber);
//     MyoviesImg.innerHTML = `<img src="/img/${myoviesImgUrl[myoviesNumber]}" alt="" id="myovies-img">`;
//   }, 200);
// });
// myoviesArrowRight.addEventListener("click", () => {
//   MyoviesImg.style.opacity = 0;
//   setTimeout(() => {
//     MyoviesImg.style.opacity = 1;
//     if (myoviesNumber < 4) {
//       myoviesNumber += 1;
//     } else {
//       myoviesNumber = 0;
//     }
//     MyoviesImg.innerHTML = `<img src="/img/${myoviesImgUrl[myoviesNumber]}" alt="" id="myovies-img">`;
//   }, 200);
// });

tictactoeArrowLeft.addEventListener("click", () => {
  tictactoeImg.style.opacity = 0;
  setTimeout(() => {
    tictactoeImg.style.opacity = 1;
    if (tictactoeNumber > 0) {
      tictactoeNumber -= 1;
    } else {
      tictactoeNumber = 2;
    }
    console.log(tictactoeNumber);
    console.log(tictactoeImgUrl[tictactoeNumber])
    if (tictactoeImgUrl[tictactoeNumber].includes("video")) {
      tictactoeImg.innerHTML=`<video width="85%" height="90%" autoplay>
  <source src="${tictactoeImgUrl[tictactoeNumber]}" type="video/mp4">
Your browser does not support the video tag.
</video>`;
    } else {
      tictactoeImg.innerHTML = `<img src="/img/${tictactoeImgUrl[tictactoeNumber]}" alt="" id="tictactoe-img">`;
    }
  }, 200);
});
tictactoeArrowRight.addEventListener("click", () => {
tictactoeNext();
});
if(tictactoevideo){
  console.log(tictactoevideo);
  tictactoevideo.addEventListener("ended",()=>{
    console.log("ended");
  });
}
 
function tictactoeNext(){
  tictactoeImg.style.opacity = 0;
  setTimeout(() => {
    tictactoeImg.style.opacity = 1;
    if (tictactoeNumber < 2) {
      tictactoeNumber += 1;
    } else {
      tictactoeNumber = 0;
    }
    // console.log(tictactoeNumber);
    if (tictactoeImgUrl[tictactoeNumber].includes("video")) {
      tictactoeImg.innerHTML = `<video width="85%" height="90%" autoplay id="tictactoe-video">
    <source src="img/${tictactoeImgUrl[tictactoeNumber]}" type="video/mp4">
  Your browser does not support the video tag.
  </video>`;
    } else {
      tictactoeImg.innerHTML = `<img src="/img/${tictactoeImgUrl[tictactoeNumber]}" alt="" id="tictactoe-img">`;
    }
  }, 200);
}


  hamburgerbutton.addEventListener('click', function() {
    if(hamburgermenu.classList.contains("open")){
      hamburgermenu.classList.remove("open");
    }else{
      hamburgermenu.classList.toggle('open');
      
    }

  });

