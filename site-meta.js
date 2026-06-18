(function () {
  const siteMeta = {
    version: "v6",
    updatedAt: "rev. 18/06/26",
    versionBurst: "✨",
    versionBurstDuration: 2200,
  };

  window.siteMeta = siteMeta;

  function initVersionControls() {
    document.querySelectorAll(".version-control").forEach((versionControl) => {
      const button = versionControl.querySelector(".version-button");
      const date = versionControl.querySelector(".version-date");
      const burst = versionControl.querySelector(".version-burst");

      if (!button || button.dataset.versionReady === "true") {
        return;
      }

      button.textContent = siteMeta.version;

      if (date) {
        date.textContent = siteMeta.updatedAt;
      }

      if (burst) {
        burst.textContent = siteMeta.versionBurst;
      }

      button.dataset.versionReady = "true";
      button.addEventListener("click", function () {
        versionControl.classList.remove("is-bursting");
        window.requestAnimationFrame(() => {
          versionControl.classList.add("is-bursting");
          window.setTimeout(() => {
            versionControl.classList.remove("is-bursting");
          }, siteMeta.versionBurstDuration);
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initVersionControls);
  } else {
    initVersionControls();
  }
})();
