function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(page).classList.remove("hidden");
}

document.querySelectorAll("[data-route]").forEach(link => {
  link.addEventListener("click", () => {
    showPage(link.getAttribute("data-route"));
  });
});

showPage("home");
