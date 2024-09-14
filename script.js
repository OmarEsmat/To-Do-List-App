const inputbox = document.getElementById("ibox");
const listcontainer = document.getElementById("list");
console.log(listcontainer)

const ad = document.getElementsByClassName('b');
function addtask() {
    if (inputbox.value === '') {
        alert("you must write something")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        console.log(li)
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputbox.value = "";
    saveData();
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        saveData();

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();

    }
}, false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();