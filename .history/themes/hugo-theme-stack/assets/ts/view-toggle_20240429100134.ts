// src/view-toggle.ts
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("view-toggle-button");
  const articleListCards = document.querySelector(".article-list-cards");
  const articleListList = document.querySelector(".article-list-list");

  if (button && articleListCards && articleListList) {
    button.addEventListener("click", () => {
      if (articleListCards.classList.contains("hidden")) {
        articleListCards.classList.remove("hidden");
        articleListList.classList.add("hidden");
      } else {
        articleListCards.classList.add("hidden");
        articleListList.classList.remove("hidden");
      }
    });
  }
});