const wrapperLogs = document.querySelector("#wrapperLogs");

const addNew = document.querySelector("#addNew");

addNew.addEventListener("click", () => {
  wrapperLogs.insertAdjacentHTML(
    "beforeend",
    `<div class="log">
    <div class="log--item"></div>
    <div class="log--information">
    <p>
    <span>Step: Potencial Client</span>
    &nbsp;
    <i class="fas fa-long-arrow-alt-right"></i>&nbsp;
    <span>
    Defined needs
    </span>
    </p>
    <span>22 de Fevereiro de 2023 às 21:21</span>
    </div>`
  );
});
