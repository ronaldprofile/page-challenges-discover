const linkSectionPortfolio = document.querySelector("#challenge-portfolio a");
linkSectionPortfolio.addEventListener("click", () =>
  alert("Desafio em desenvolvimento.")
);

console.log(linkSectionPortfolio);

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  ` header,
    #challenges .section-header,
    #challenges .card
  `,
  { interval: 100 }
);
