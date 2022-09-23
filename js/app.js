let dragItems = document.querySelectorAll(".box");
let dropArea = document.querySelector("#DropArea");
let count = dragItems.length;
let allcounts = document.querySelector("#allcounts");
allcounts.innerHTML = count;
currentcounts.innerHTML = count;

dropArea.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropArea.addEventListener("dragleave", function (e) {
  e.preventDefault();
});

for (var i = 0; i < dragItems.length; i++) {
  dragItems[i].addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("group", this.id);
    console.log(e.dataTransfer);

    let currentcounts = document.querySelector("#currentcounts");
    count--;
    currentcounts.innerHTML = count;
  });
}

dropArea.addEventListener("drop", function (e) {
  let index = e.dataTransfer.getData("group");
  let drgitem = document.getElementById(index);
  dropArea.appendChild(drgitem);
});
