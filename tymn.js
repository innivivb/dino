const dog = document.getElementById("dog")
const tree = document.getElementById("tree")

document.addEventListener("keydown", function(event) {
    jump();
});


function jump () {
    if (!dog.classList.contains("jump")){
        dog.classList.add("jump");
        setTimeout( function () {
            dog.classList.remove("jump")
        }, 300);
    }
}

let isAlive = setInterval ( function (){
    let dogTop = parseInt(window.getComputedStyle(dog).getPropertyValue("top"));
    let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));
    if (treeLeft < 50 && treeLeft > 0 && dogTop >= 140){
        alert("GAME OVER!!")
    }
}, 10)