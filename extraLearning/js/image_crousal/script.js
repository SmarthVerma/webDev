console.log(`hi`);

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const total_num = 3;
let current_num = 0; // Use 0-based index

left.addEventListener("click", () => {
    console.log(`click mee sensei`);
    let current = document.querySelector(".slides.current");
    let current_nav = document.querySelector(".circle.current_nav");

    if (current) {
        current.classList.remove("current");
        current.classList.add("hidden");
        current_nav.classList.remove("current_nav");

        current_num = Math.max(current_num - 1, 0); // Ensure index doesn't go below 0

        const newCurrent = document.querySelectorAll(".slides")[current_num];
        const newCurrentNav = document.querySelectorAll(".circle")[current_num];

        newCurrent.classList.add("current");
        newCurrent.classList.remove("hidden");
        newCurrentNav.classList.add("current_nav");
    }
});

right.addEventListener("click", () => {
    console.log(`uniii-chan`);
    let current = document.querySelector(".slides.current");
    let current_nav = document.querySelector(".circle.current_nav");

    if (current) {
        current.classList.remove("current");
        current.classList.add("hidden");
        current_nav.classList.remove("current_nav");

        current_num = Math.min(current_num + 1, total_num - 1); // Ensure index doesn't exceed total_num - 1

        const newCurrent = document.querySelectorAll(".slides")[current_num];
        const newCurrentNav = document.querySelectorAll(".circle")[current_num];

        newCurrent.classList.add("current");
        newCurrent.classList.remove("hidden");
        newCurrentNav.classList.add("current_nav");
    }
});
