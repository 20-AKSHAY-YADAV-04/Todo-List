const item = document.querySelector("#item");
const addToDoButton = document.getElementById("SaveTodo");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addToDo(this.value);
            this.value = "";
        }
    }
)

item.addEventListener(
    "click",
    function () {
        if (addToDoButton()) {
            addToDo(this.value);
            this.value = "";
        }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
        <i class="fa fa-times fa-2x"></i>
    `;
    listItem.addEventListener(
        "click",
        function (event) {
            this.classList.toggle("done")
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function (event) {
            listItem.remove();
        }
    )
    toDoBox.appendChild(listItem);
}

// addToDoButton.addEventListener("click", function() {
//     const listItem1 = document.createElement("li");
//     this.value;
//     listItem1.innerHTML = `
//         ${item}
//         <i class="fa fa-times fa-2x"></i>
//     `;
//     listItem1.addEventListener(
//         "click",
//         function (event) {
//             this.classList.toggle("done")
//         }
//     )
//     listItem1.querySelector("i").addEventListener(
//         "click",
//         function (event) {
//             listItem1.remove();
//         }
//     )
//     toDoBox.appendChild(listItem1);
// })

