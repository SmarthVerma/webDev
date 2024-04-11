// let big=document.body.querySelector(".container");




// function createCard(title, cName, views, monthsOld, duration, thumnbnail){
//     let card = document.createElement("div");
//     card.setAttribute("class", "box");
//     let cont = document.body.querySelector(".container").children[0]
//     cont.firstChild
// }
//  let card = document.createElement("div");
//  card.setAttribute("class", "box");
//  let cont = document.body.querySelector(".container");

//  let newImg = document.querySelector("myThumbnail");
//  if(newImg){
//     newImg.src=thumnbnail;
//  }

//  let chanName= document.getElementsByClassName("name");
//  chanName.innerHTML=cName;


// let dur



function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let card = document.createElement("div");
  card.setAttribute("class", "box");

  // Create image element
  let imgElement = document.createElement("img");
  imgElement.setAttribute("src", thumbnail); // Set thumbnail src
  card.appendChild(imgElement); // Append image to card

  // Create title element
  let titleElement = document.createElement("h2");
  titleElement.textContent = title;
  card.appendChild(titleElement); // Append title to card

  // Create details element
  let detailsElement = document.createElement("p");
  detailsElement.textContent =
    views + " views • " + monthsOld + " months old • " + duration;
  card.appendChild(detailsElement); // Append details to card

  // Create channel name element
  let channelNameElement = document.createElement("p");
  channelNameElement.setAttribute("class", "name");
  channelNameElement.textContent = cName;
  card.appendChild(channelNameElement); // Append channel name to card

  // Append card to container
  let container = document.body.querySelector(".container");
  if (container) {
    container.appendChild(card);
  } else {
    console.error("Container not found.");
  }
}

// Example usage:
x
