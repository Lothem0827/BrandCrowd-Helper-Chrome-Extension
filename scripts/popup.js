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

        // document
        //   .getElementsByClassName(
        //     "tw-font-sans tw-cursor-pointer tw-border-2 tw-border-solid tw-font-bold tw-uppercase tw-bg-transparent tw-transition-colors tw-duration-300 tw-border-secondary-500 tw-text-secondary-500 hover:tw-bg-secondary-100 tw-text-xs tw-py-2 tw-px-5 tw-rounded"
        //   )[1]
        //   .click();
        // setTimeout(
        //   () => document.getElementById("animation-item-null").click(),
        //   500
        // );
      });
    };

    const mutationObserver = new MutationObserver((entries) => {
      console.log(entries);
      removeAnimation();
    });

    mutationObserver.observe(canvas, { attributes: true });
  }

  _stretcharooHandlder() {
    const checkBoxHTML = `<br><input type="checkbox" id="templateTypeCheck" name="templateTypeCheck">
<label for="templateTypeCheck"> Select templates for stretching </label><br>`;
    const templateType = document.getElementsByTagName("select")[5].innerHTML;

    //template type to check
    const typeArr = ["Facebook post", "Twitter post", "Poster", "Postcard"];

    //inserting checkbox
    document
      .getElementsByClassName("column expand")[0]
      .insertAdjacentHTML("beforeend", checkBoxHTML);

    const templateTypeCheck = document.getElementById("templateTypeCheck");

    const changeHandler = function () {
      if (templateTypeCheck.checked) {
        console.log("check");
        filteredType();
      } else {
        console.log("uncheck");
      }
    };

    const filteredType = function () {};

    templateTypeCheck.addEventListener("change", changeHandler);
  }
}

const app = new App();
