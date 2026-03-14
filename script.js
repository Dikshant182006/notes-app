const note = document.getElementById("second");
const boxes = document.getElementById("boxes");
const counter = document.getElementById("count");
let count = 0;

note.addEventListener("click", () => {

    count++;
    counter.textContent = count;

    const li = document.createElement("li");

    li.innerHTML = `<p contenteditable="true"></p>
                    <img class="deletebtn" src="img.svg/delete.svg" alt="Delete">`

                    boxes.appendChild(li);
                    setData();
})

// Add delete button
boxes.addEventListener("click", (e) => {
    if(e.target.classList.contains("deletebtn")) {
        e.target.parentElement.remove();
        count = Math.max(0 , count-1);
        counter.textContent = count;
        setData();
    }
})

// input
boxes.addEventListener("input", () => {
    setData()
})

function setData(){
    localStorage.setItem("notes", boxes.innerHTML);
    localStorage.setItem("setCount", count);
}

function getData(){
    boxes.innerHTML = localStorage.getItem("notes") || "";
    const savedData = localStorage.getItem("setCount");

    count = savedData ? Number(savedData) : boxes.children.length;
    // If saved count and actual notes diverge, keep non-negative and sync
    if (count < 0) count = 0;
    counter.textContent = count;
}

getData();