copyTagHandler = function () {
  _copyTagButtonInit();

  const copyTagBtn = document.getElementById("copyTagBtn");
  copyTagBtn.addEventListener("click", _getTags);
};

const _copyTagButtonInit = function () {
  const copyTagBtnHTML = `<button id="copyTagBtn" class="button mbn" style="margin-top: 12px;"> Copy Tags </button>`;
  const templateTagContainer = document.getElementsByClassName(
    "column small-12 medium-6 mbl"
  )[0];

  //add copytagbtn to tag container
  templateTagContainer.insertAdjacentHTML("beforeend", copyTagBtnHTML);
};

const _getTags = function () {
  const str = document.querySelectorAll(".select2-selection__rendered")[1]
    .innerText;

  const reg = str.replaceAll(`\n`, `, `);
  const tags = reg.replaceAll(`×`, ``) + `,`;

  if (confirm("Copy this tags? \n" + tags)) navigator.clipboard.writeText(tags);
};
