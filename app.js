const hash = window.location.hash;

async function loadLayout() {
  await headerLayout("header-container");
  await beforeLoad();
  
  if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    if (hash === "#epochconverter") {
      await mainLayout("main-content", "templates/epochconverter.html");
      await loadScript("components/epochconverter.js", "script-after");
      
    } else {
      await mainLayout("main-content", "templates/main.html");
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

const reloadCount = 0;

window.addEventListener("hashchange", async () => {
  if (reloadCount === 0) {
    window.location.reload();
    reloadCount++;
  }
  if (window.location.hash === "#epochconverter") {
    beforeLoad();
    emptyScript("script-after");
    await mainLayout("main-content", "templates/epochconverter.html");
    await loadScript("components/epochconverter.js", "script-after");
  } else {
    beforeLoad();
    emptyScript("script-after");
    await mainLayout("main-content", "templates/main.html");
    await loadScript("autotyping.js", "script-after");
  }
});

