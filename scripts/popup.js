class App {
  constructor() {
    this._copyTagHandler();
    this._removeAnimationHandler();
    this._stretcharooHandlder();
    this._bgColorChangeHandler();
  }

  _copyTagButtonInit() {
    //Create Copy Tag Button
    const copyTagBtnHTML = `<button id="copyTagBtn" class="button mbn" style="margin-top: 12px;"> Copy Tags </button>`;

    document
      .getElementsByClassName("column small-12 medium-6 mbl")[0]
      .insertAdjacentHTML("beforeend", copyTagBtnHTML);
  }

  _copyTagHandler() {
    this._copyTagButtonInit();
    const copyTagBtn = document.getElementById("copyTagBtn");

    const getTags = function () {
      const str = document.querySelectorAll(".select2-selection__rendered")[1]
        .innerText;

      const reg = str.replaceAll(`\n`, `, `);
      const tags = reg.replaceAll(`×`, ``) + `,`;

      if (confirm("Copy this tags? \n" + tags))
        navigator.clipboard.writeText(tags);
    };

    copyTagBtn.addEventListener("click", getTags);
  }

  _removeAnimationHandler() {
    const canvas = document.querySelector(".maker-canvas-frame, .mbm");

    const removeAnimation = function () {
      canvas.addEventListener("dblclick", () => {
        //Buttons
        const changeAnimationBtn = document.getElementsByClassName(
          "tw-font-sans tw-cursor-pointer tw-border-2 tw-border-solid tw-font-bold tw-uppercase tw-bg-transparent tw-transition-colors tw-duration-300 tw-border-secondary-500 tw-text-secondary-500 hover:tw-bg-secondary-100 tw-text-xs tw-py-2 tw-px-5 tw-rounded"
        )[1];
        const removeAnimationBtn = document.getElementById(
          "animation-item-null"
        );

        if (changeAnimationBtn) changeAnimationBtn.click();

        setTimeout(() => {
          if (removeAnimationBtn) removeAnimationBtn.click();
        }, 300);
      });
    };

    const mutationObserver = new MutationObserver(() => {
      removeAnimation();
    });

    mutationObserver.observe(canvas, { attributes: true });
  }

  _stretcharooHandlder() {
    //template type to check
    const typeArr = [
      "Facebook post",
      "LinkedIn post",
      "Instagram post",
      "Facebook story",
      "Instagram story",
      "Twitter post",
      "Pinterest Pin",
      "Facebook ad",
      "Facebook cover",
      "Facebook event cover",
      "Poster",
      "Flyer",
      "Postcard",
      "Tiktok video",
      "Instagram reel",
      "YouTube short",
      "Youtube video",
      "Video",
      "Animation",
    ];

    const templateTypesSelect = document.getElementsByTagName("select")[5];
    const saveTemplateBtn = document.getElementById("save-template");
    const checkBoxHTML = `<br><input type="checkbox" id="templateTypeCheck" name="templateTypeCheck"> <label for="templateTypeCheck"> <strong>Main templates for stretching</strong>`;
    const saveProgressCallout = document.getElementById(
      "template-update-success-callout"
    );
    //inserting checkbox
    document
      .getElementsByClassName("column expand")[0]
      .insertAdjacentHTML("beforeend", checkBoxHTML);

    const templateTypeCheck = document.getElementById("templateTypeCheck");

    const isSaveChecker = function () {
      const mutationObserver = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
          console.log(mutationsList);
          if (mutation.attributeName === "class") {
            window.location.reload();
          }
        });
      });

      mutationObserver.observe(saveProgressCallout, { attributes: true });
    };

    const savePrompt = function () {
      saveTemplateBtn.click();
      isSaveChecker();
    };

    const changeHandler = function () {
      if (templateTypeCheck.checked) {
        filteredType();
        templateTypesSelect.setAttribute(
          "size",
          templateTypesSelect.options.length
        );
      } else {
        savePrompt();
      }
    };

    const filteredType = function () {
      [...templateTypesSelect.options].filter((option) => {
        if (!typeArr.includes(option.innerText)) option.remove();
      });
    };

    templateTypeCheck.addEventListener("change", changeHandler);
  }

  _bgColorChangeHandler() {
    const section = document.getElementsByClassName("section")[0];
    const colorPickerStyleStr = `style=" width: 40px; height: 40px; border: 1px; padding: 1px; position: sticky; bottom: 0; left: 98%;"`;

    const colorPickerHTML = `<input type="color" id="color-picker" ${colorPickerStyleStr}  ></input>`;

    document.body.style.backgroundColor = "#F4F4F4";
    section.classList.remove("section--gray");

    document.body.insertAdjacentHTML("beforeend", colorPickerHTML);

    const color = document.querySelector("#color-picker");

    color.addEventListener(
      "input",
      () => {
        invert(color.value);
        const colorHex = color.value;

        const r = parseInt(colorHex.substr(1, 2), 16);
        const g = parseInt(colorHex.substr(3, 2), 16);
        const b = parseInt(colorHex.substr(5, 2), 16);

        console.log(r, g, b);
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
  }
}

const app = new App();
