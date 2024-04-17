function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let views2;

  if (views > 1000) {
    views2 = views / 1000 + `K`;
  } else if (views > 1000) {
    views2 = views / 1000000 + `M`;
  } else {
    views2 = views;
  }

  let html = ` <div class="box">
                    <div class="thumb">
                        <img id="myThumbnail" src="${thumbnail}" alt="thumb">
                        <span class="duration">${duration}</span>
                    </div                                                               >
                    <div class="discript">
                        <div class="title">
                            <h4>${title}</h4>
                        </div>
                        <div class="details">
                            <span class="name">${cName} .</span>
                         <span class="views">${views2} .</span>
                             <span class="uploaded">${monthsOld} months ago</span>
                        </div>

                    </div>
                </div>`;

  let container = document.querySelector(".container");
  const c = document.createElement("div");
  c.setAttribute("class", "box");
  c.innerHTML = html;
  container.append(c);
}
createCard(
  "Introduction to Backend | Sigma Web Dev veqweideo #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "thumbnail.webp"
);
createCard(
  "Introduction to Backend | Sigma Web Dev veqweideo #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",  
  "thumbnail.webp"
);
