const button = {
  showModal: document.querySelector("#showModal"),
  close: document.querySelector("#close"),
  cancel: document.querySelector("#cancel"),
};
const dialog = document.querySelector("dialog");
const content = document.querySelector("dialog>div");
const body = document.querySelector("body");

function isDialogSupported() {
  return typeof HTMLDialogElement === "function";
}

function show() {
  dialog.showModal();
  body.classList.add("scroll-muted");
}

function close() {
  dialog.close();
  const dialogOpened = document.querySelectorAll("dialog[open]");
  if (!dialogOpened.length) body.classList.remove("scroll-muted");
}

button.showModal.addEventListener("click", show, false);
button.close.addEventListener("click", close, false);
button.cancel.addEventListener(
  "click",
  () => {
    dialog.returnValue = null;
    close();
  },
  false
);
dialog.addEventListener("click", close, false);
dialog.addEventListener("cancel", () => (dialog.returnValue = null), false);
content.addEventListener("click", (e) => e.stopPropagation(), false);
