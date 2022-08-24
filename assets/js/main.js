var item = document.getElementById("item");
const toDoBox = document.getElementById("to-do-box");

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addToDo(this.value);
            this.value= "";
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