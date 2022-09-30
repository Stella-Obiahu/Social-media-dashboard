// function callMe(){
//     location.replace("https://socialmedialight.netlify.app/")
// }
// function callMe2(){
//     location.replace("http://127.0.0.1:5500/index.html")
// }
function callMe() {
    debugger
    var element = document.getElementById("name1");
    var element2 = document.getElementById("body");
    var forwhite = document.getElementById("whitew");
    var inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].checked == false) {
            debugger
            element.classList.remove("main_1");
            element2.classList.remove("danny1");
            forwhite.classList.remove("white");
            forwhite.classList.add("black");
            // inputs[i].checked = true; 
        }
        else {
            if(inputs[i].checked == true) {
                debugger
                element.classList.add("main_1");
                element2.classList.add("danny1");
                forwhite.classList.add("white");
                // inputs[i].checked = false; 
             }   
        }
    } 
  }