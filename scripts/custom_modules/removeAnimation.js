const removeAnimationHandler = function () {
  const canvas = document.querySelector(".maker-canvas-frame, .mbm");

  const _removeAnimation = function () {
    canvas.addEventListener("dblclick", () => {
      //Buttons
      const changeAnimationBtn = document.getElementsByClassName(
        "tw-font-sans tw-cursor-pointer tw-border-2 tw-border-solid tw-font-bold tw-uppercase tw-bg-transparent tw-transition-colors tw-duration-300 tw-border-secondary-500 tw-text-secondary-500 hover:tw-bg-secondary-100 tw-text-xs tw-py-2 tw-px-5 tw-rounded"
      )[1];
      const removeAnimationBtn = document.getElementById("animation-item-null");

      changeAnimationBtn && changeAnimationBtn.click();

      setTimeout(() => {
        removeAnimationBtn && removeAnimationBtn.click();
      }, 300);
    });
  };

  const mutationObserver = new MutationObserver(() => {
    _removeAnimation();
  });

  mutationObserver.observe(canvas, { attributes: true });
};
