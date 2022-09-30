// function callMe(){
//     location.replace("https://socialmedialight.netlify.app/")
// }
// function callMe2(){
//     location.replace("http://127.0.0.1:5500/index.html")
// }
var mere = document.querySelectorAll(".card");
for (var i = 0; i < mere.length; i++) {
    // Add the class margin to the individual elements.
    mere[i].classList.add('card2');
  }
function callMe() {
    debugger
    var element = document.getElementById("name1");
    var element2 = document.getElementById("body");
    var forwhite = document.getElementById("whitew");
    var inputs = document.getElementsByTagName("input");
    var ov = document.getElementById("overview");
    var cards = document.querySelectorAll(".card");
    var whiite = document.querySelectorAll(".whiite");
    for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].checked == false) {
            debugger
            element.classList.remove("main_1");
            element2.classList.remove("danny1");
            forwhite.classList.remove("white");
            forwhite.classList.add("black");
            ov.classList.remove("white");
            ov.classList.add("black");
            // cards.classList.remove("card1");
            // cards.classList.add("card2");
            for (var i = 0; i < cards.length; i++) {
                // Add the class margin to the individual elements.
                cards[i].classList.remove('card1');
                cards[i].classList.add('card2');
              }
              for (var i = 0; i < whiite.length; i++) {
                // Add the class margin to the individual elements.
                whiite[i].classList.remove('white');
                whiite[i].classList.add('black');
              }
            // inputs[i].checked = true; 
        }
        else {
            if(inputs[i].checked == true) {
                debugger
                element.classList.add("main_1");
                element2.classList.add("danny1");
                forwhite.classList.add("white");
                ov.classList.add("white");
                // cards.classList.add("card1");
                for (var i = 0; i < cards.length; i++) {
                    // Add the class margin to the individual elements.
                    cards[i].classList.add('card1');
                  }
                  for (var i = 0; i < whiite.length; i++) {
                    // Add the class margin to the individual elements.
                    whiite[i].classList.add('white');
                  }
                // inputs[i].checked = false; 
             }   
        }
    } 
  }