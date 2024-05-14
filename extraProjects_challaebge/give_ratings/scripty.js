console.log(`hello world`);

const stars = Array.from(document.querySelectorAll(".yellow"));
const ratings = ["One", "Two", "Three", "Four", "Five"];

stars.forEach((star, idx) => {
  star.addEventListener("mouseover", () => {
    let msg= document.querySelector(".response").firstElementChild
    for (let i = 0; i <= idx; i++) {
      stars[i].src = "yellow.svg";
    }
    msg.innerHTML=`${ratings[idx]} Star Ratings`
  });
});

stars.forEach((star, idx) => {
  star.addEventListener("mouseout", () => {
    for (let i = 0; i <= idx; i++) {
      stars[i].src = "star-svgrepo-com.svg";
    }
    let msg = document.querySelector(".response").firstElementChild;
    msg.innerHTML = `Give us ratings`;
  });
});
