let slider = document.querySelector("#slider");
let output = document.querySelector("#output");

output.textContent = `${slider.value} x ${slider.value}`;

slider.oninput = function () {
  output.textContent = `${this.value} x ${this.value}`;
};
