const arrowLeft = document.getElementById("myovies-slideleft");
const arrowRight = document.getElementById("myovies-slideright");
const MyoviesImg = document.getElementById("myovies-img-container");
const myoviesImgUrl = [
  "intro-page-nosearch.png",
  "myovies-startpage.png",
  "myovies-favorites.png",
  "myovies-searchpage.png",
  "myovies-rating.png",
];
let myoviesNumber = 0;

// arrowLeft.addEventListener("click", () => {
//   MyoviesImg.style.opacity = 0;
//   setTimeout(() => {
//     MyoviesImg.style.opacity = 1;
//     try {
//       MyoviesImg.innerHTML = `<img src="/img/${myoviesImgUrl[myoviesNumber]}" alt="" id="myovies-img">`;
//     } catch {
//       myoviesNumber = myoviesNumber.length - 1;
//       myoviesImgUrl[myoviesNumber];
//     }
//   }, 700);
// });
arrowLeft.addEventListener("click", () => {
  MyoviesImg.style.opacity = 0;
  setTimeout(() => {
    MyoviesImg.style.opacity = 1;
    if (!myoviesNumber == 0 || myoviesNumber == 3) {
      myoviesNumber -= 1;
    } else {
      myoviesNumber = 4;
    }
    console.log(myoviesNumber);
    MyoviesImg.innerHTML = `<img src="/img/${myoviesImgUrl[myoviesNumber]}" alt="" id="myovies-img">`;
  }, 700);
});
arrowRight.addEventListener("click", () => {
  MyoviesImg.style.opacity = 0;
  setTimeout(() => {
    MyoviesImg.style.opacity = 1;
    if (myoviesNumber < 5) {
      myoviesNumber += 1;
    } else {
      myoviesNumber = 0;
    }
    console.log(myoviesNumber);
    MyoviesImg.innerHTML = `<img src="/img/${myoviesImgUrl[myoviesNumber]}" alt="" id="myovies-img">`;
  }, 700);
});
