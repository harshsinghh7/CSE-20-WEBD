document.body.innerHTML = `
<h1>To Do List</h1>
<input id="task" placeholder="Enter task">
<button onclick="addTask()">Add</button>
<ul id="list"></ul>
`;

window.addTask = function(){
    let task = document.getElementById("task").value;

    let li = document.createElement("li");
    li.innerText = task;

    document.getElementById("list").appendChild(li);
}