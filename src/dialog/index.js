const button = document.querySelector("button");
const dialog = document.querySelector("dialog");
const content = document.querySelector("dialog>div");

button.addEventListener("click", () => dialog.showModal(), false);
dialog.addEventListener("click", () => dialog.close(), false);
content.addEventListener("click", (e) => e.stopPropagation(), false);
