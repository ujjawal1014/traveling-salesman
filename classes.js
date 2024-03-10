document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
const sidebarButton = document.getElementById("sidebarButton");
const buttonContainer = document.getElementById("buttonContainer");
const closeButton = document.getElementById("closeButton");

sidebarButton.addEventListener("click", () => {
  buttonContainer.style.display = "none"; // Hide the buttons
});

closeButton.addEventListener("click", () => {
  buttonContainer.style.display = "block"; // Show the buttons
});
