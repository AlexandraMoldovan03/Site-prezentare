document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const sectionId = link.getAttribute("href").substring(1);
      const section = document.getElementById(sectionId);
      
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
