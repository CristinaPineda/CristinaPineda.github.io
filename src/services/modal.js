export default function startModal(modalID) {
  const modal = document.getElementById(modalID);
  if (modal) {
    modal.classList.add("open");
    modal.addEventListener("click", (e) => {
      if (e.target.id === modalID || e.target.className === "close") {
        modal.classList.remove("open");
      }
    });
  }
}
