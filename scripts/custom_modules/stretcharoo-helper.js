const stretcharooHandlder = function () {
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

  const _isSaveChecker = function () {
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

  const _savePrompt = function () {
    saveTemplateBtn.click();
    _isSaveChecker();
  };

  const _changeHandler = function () {
    if (templateTypeCheck.checked) {
      _filteredType();
      templateTypesSelect.setAttribute(
        "size",
        templateTypesSelect.options.length
      );
    } else {
      _savePrompt();
    }
  };

  const _filteredType = function () {
    [...templateTypesSelect.options].filter((option) => {
      if (!typeArr.includes(option.innerText)) option.remove();
    });
  };

  templateTypeCheck.addEventListener("change", _changeHandler);
};
