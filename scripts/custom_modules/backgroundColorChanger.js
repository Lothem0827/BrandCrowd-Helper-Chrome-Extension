const bgColorChangeHandler = function () {
  const section = document.getElementsByClassName("section")[0];
  const colorPickerStyleStr = `style=" width: 40px; height: 40px; border: 1px; padding: 1px; position: sticky; bottom: 0; left: 98%;"`;

  const colorPickerHTML = `<input type="color" id="color-picker" ${colorPickerStyleStr}  ></input>`;

  document.body.style.backgroundColor = "#F4F4F4";
  section.classList.remove("section--gray");

  document.body.insertAdjacentHTML("beforeend", colorPickerHTML);

  const color = document.querySelector("#color-picker");

  color.addEventListener(
    "change",
    () => {
      invert(color.value);
      const colorHex = color.value;

      //   const r = parseInt(colorHex.substr(1, 2), 16);
      //   const g = parseInt(colorHex.substr(3, 2), 16);
      //   const b = parseInt(colorHex.substr(5, 2), 16);

      //   console.log(r, g, b);
      chrome.storage.sync.set({ color: colorHex }, function () {
        console.log("save: ", colorHex);
      });
    },
    false
  );

  color.addEventListener(
    "input",
    () => {
      invert(color.value);
    },
    false
  );

  // color.addEventListener("change", () => console.log(color.value), false);

  const invert = function (pickColor) {
    document.body.style.backgroundColor = `${pickColor}`;
    section.style.backgroundColor = `${pickColor}`;

    const divNodes = [...section.childNodes].filter(
      (child) => child.nodeName != "#text"
    );

    divNodes.forEach((x) => (x.style.filter = "invert(1)"));

    document
      .querySelectorAll(".button")
      .forEach((button) => (button.style.filter = "grayscale(70%)"));

    document.getElementById("admin-maker-container").style.filter = "";
  };

  chrome.storage.sync.get("color", function (data) {
    document.body.style.backgroundColor = `${data.color}`;
    section.style.backgroundColor = `${data.color}`;

    const divNodes = [...section.childNodes].filter(
      (child) => child.nodeName != "#text"
    );

    divNodes.forEach((x) => (x.style.filter = "invert(1)"));

    document
      .querySelectorAll(".button")
      .forEach((button) => (button.style.filter = "grayscale(70%)"));

    document.getElementById("admin-maker-container").style.filter = "";
  });
};
