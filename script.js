const developerSpan = document.querySelector("#developer-span");
window.addEventListener("scroll", () => {
  if (scrollY > 300) {
    // developerSpan.style.color = "black";
    // developerSpan.style.position = "relative";
    // developerSpan.style.top = "300px";
    // developerSpan.style.transform = "rotate(30deg)";
  }
  console.log(scrollY);
});
