import { loadProjects } from "./services/api.js";
import { animateElementsDOM } from "./services/scrollReveal.js";

const projects = loadProjects();
const cards = document.querySelector("#challenges .cards");

function createCardsDOM() {
  projects.forEach(project => {
    const html = `
      <div class="card" id="challenge-${project.id}">
        <img
          src="${project.imageBanner}"
          alt="${project.name} banner"
          class="background-card"
        />
  
      <div class="content-card">
        <strong class="title-card">Desafio "${project.name}"</strong>
  
        <p class="description-card">
          ${project.description}
        </p>
  
        <footer>
          <a
            href="${project.demo}"
            target="_blank"
            class="link-demo button">
            demo
          </a>
  
          <a href="${project.repository}" 
          class="link-repo button" target="_blank">
          repository
          </a>
        </footer>
      </div>
    </div>
    `;

    cards.innerHTML += html;
  });
}

window.addEventListener("load", () => {
  createCardsDOM();
  animateElementsDOM();
});
