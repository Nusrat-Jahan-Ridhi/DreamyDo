function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${taskText}</span> <button class="delete-btn">❌</button>`;
    li.querySelector(".delete-btn").addEventListener("click", () => li.remove());
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}