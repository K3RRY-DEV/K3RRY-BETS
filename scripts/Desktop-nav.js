export const headerLinks =document.querySelectorAll(".header2-link,.header3-link");

headerLinks.forEach(link => {
  link.addEventListener("click", () => {
    headerLinks.forEach(otherLink => {
      otherLink.classList.remove("active");
    });
    link.classList.add("active");
  })
})