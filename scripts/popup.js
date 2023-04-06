class App {
  constructor() {
    this._copyTagHandler();
    this._removeAnimationHandler();
    this._stretcharooHandlder();
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
        }, 500);
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
    //     const checkBoxHTML = `<br><input type="checkbox" id="templateTypeCheck" name="templateTypeCheck">
    // <label for="templateTypeCheck"> <strong>Select:</strong> ${[
    //       ...typeArr,
    //     ]} </label><br>`;
    const checkBoxHTML = `<br><input type="checkbox" id="templateTypeCheck" name="templateTypeCheck">
<label for="templateTypeCheck"> <strong>Main templates for stretching</strong>`;

    //inserting checkbox
    document
      .getElementsByClassName("column expand")[0]
      .insertAdjacentHTML("beforeend", checkBoxHTML);

    const templateTypeCheck = document.getElementById("templateTypeCheck");

    const changeHandler = function () {
      if (templateTypeCheck.checked) {
        filteredType();
        templateTypesSelect.setAttribute(
          "size",
          templateTypesSelect.options.length
        );
      } else {
        window.location.reload();
      }
    };

    const filteredType = function () {
      [...templateTypesSelect.options].filter((option) => {
        if (!typeArr.includes(option.innerText)) option.remove();
      });
    };

    templateTypeCheck.addEventListener("change", changeHandler);
  }
}

const app = new App();

const section = document.getElementsByClassName("section")[0];
const colorPickerHTML = `<input type="color" id="color-picker" class="maker-tool">BACKGROUND COLOR</input>`;

section.classList.remove("section--gray");

document
  .getElementsByClassName("column expand")[0]
  .insertAdjacentHTML("beforeend", colorPickerHTML);

const color = document.querySelector("#color-picker");

color.addEventListener(
  "input",
  () => {
    section.style.backgroundColor = `${color.value}`;
    section.childNodes[1].style.filter = "invert(1)";

    section.childNodes[3].style.filter = "invert(1)";

    section.childNodes[7].style.filter = "invert(1)";
  },
  false
);
//1,3,7,13
// section.style.backgroundColor = "#131313";
// section.style.filter = "invert(1)";

// section.childNodes[1].style.filter = "invert(1)";

// section.childNodes[3].style.filter = "invert(1)";

// section.childNodes[7].style.filter = "invert(1)";

document
  .querySelectorAll(".button")
  .forEach((button) => (button.style.filter = "saturate(20%)"));

// color.addEventListener("change", () => console.log(color.value), false);
