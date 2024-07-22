const inputForm: HTMLElement | null = document.querySelector("#tableForm");
const input: HTMLInputElement | null = document.querySelector("#inputID");
const table: HTMLElement | null = document.querySelector(".time-table");

inputForm?.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const tableOf: string = input?.value || "";

  if (table) {
    table.innerHTML = "";

    for (let i: number = 1; i <= 10; i++) {
      const message: string = `${tableOf}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ${i}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 =\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ${parseInt(tableOf) * i}`;

      if (table) {
        table.innerHTML += `${message} <br>`;
      }
    }
  }
});


