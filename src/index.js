function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 60,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "6dod2fbfa8c43fe552ftae49bc36d90b";
  let prompt = `Generate a Polish poem about a ${instructionInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems.Generate a 4 line poem,each line of the poem using: <br/>. Make sure you follow the user instructions and don't inlcude any of your comments. Be precise. Sign at the end in a new line <strong> SheCodes AI</strong>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("generating poem");
  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
