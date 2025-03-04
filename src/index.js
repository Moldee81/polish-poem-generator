function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Nic dwa razy się nie zdarza",
    autoStart: true,
    delay: 60,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
