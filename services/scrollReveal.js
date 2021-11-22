const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true
});

export function animateElementsDOM() {
  scrollReveal.reveal(
    ` header,
      #challenges .section-header,
      #challenges .card
    `,
    { interval: 100 }
  );
}
