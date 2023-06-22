const groceries = document.getElementById("groceries")[0];
const pencil = document.getElementById("pencil");
const allitems = document.getElementById("allitems");
const userInput = document.getElementById("userinput");

pencil.addEventListener("click" ,function(){
    allitems.innerHTML = "";
})

userInput.addEventListener("keydown" ,function(event){
    if(event.key =="Enter")
    additem();
})

function additem(){
    var h2 = document.createElement("h2");
    h2.innerHTML = userInput.value;

    allitems.insertAdjacentElement("beforeend",h2);

    userInput.value="";
}