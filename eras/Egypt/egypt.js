const scrollBtn = document.createElement('button');
scrollBtn.innerText = "⬆";
scrollBtn.className = "scroll-top-btn";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});