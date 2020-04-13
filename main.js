




/*boxes checked*/


var check = document.querySelector(".review")
var reviewOnly = document.querySelector(".reviewSome")
console.log(check);
var theBoxes = document.querySelectorAll(".flip-box")
console.log(theBoxes)


reviewOnly.addEventListener("click", searching);

function searching(evt) {
  evt.preventDefault();
  console.log(evt)
  theBoxes.forEach(charDiv => {
    var reviewCheckbox = charDiv.querySelector(".review")
    if (reviewCheckbox.checked) {
        charDiv.style.visibility = "visible"
        reviewOnly.innerText = "Show Review Only"
    } else if (charDiv.style.visibility === "hidden"){
      charDiv.style.visibility = "visible"
    }
    else{
        charDiv.style.visibility = "hidden"
        reviewOnly.innerText = "Show All Cards"
    }
  });
};




// // The code below is an attempted implementation of a Javascript function allowing a card to be flipped. 
// // The logic to get the card to return to it's original unflipped state is being developed.


//  let flipTheBoxes =  document.getElementsByClassName("flip-box-inner");

// let array = Array.from(flipTheBoxes);

// array.forEach(box => box.addEventListener('click', function(evt){
//   evt.preventDefault();
//   console.log(evt);
// if(box.x ==="true"){     box.style.transform = "rotateX(180deg)";}




// }));








