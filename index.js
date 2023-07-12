function addb() {
  let taskName = document.getElementById("nameForm").value;

  let list = document.getElementById("list");

  let newDo = document.createElement("li");

  newDo.textContent = taskName;

  let cancButton = document.createElement("button");

  cancButton.textContent = "DELETE";

  cancButton.classList.add("delete-button");

  newDo.appendChild(cancButton);

  cancButton.addEventListener("click", function () {
    this.parentNode.remove();
  });

  list.appendChild(newDo);
}
