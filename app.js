const hash = window.location.hash;

async function loadLayout() {
  await headerLayout("header-container");
  await beforeLoad();
  
  if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    if (hash === "#epochconverter") {
      mainLayout("main-content", "templates/epochconverter.html");
      loadScript("components/epochconverter.js", "script-after");
    } else {
      mainLayout("main-content", "templates/main.html");
      await loadScript("autotyping.js", "script-after");
    }
  }

  await footerLayout("footer-container");
}

loadLayout().then(() => {
  const menu = document.querySelector("#navbar-dropdown");
  const moon = document.querySelector("#moon");
  const body = document.querySelector("body");

  moon.addEventListener("click", () => {
    body.classList.toggle("dark");
  });
});

window.addEventListener("hashchange", async () => {
  if (window.location.hash === "#epochconverter") {
    beforeLoad();
    await mainLayout("main-content", "templates/epochconverter.html");
    await loadScript("components/epochconverter.js", "script-after");
  } else {
    beforeLoad();
    await mainLayout("main-content", "templates/main.html");
  }
});

