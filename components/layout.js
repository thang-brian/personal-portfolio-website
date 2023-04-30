"use strict";

const version = "0.0.2";

async function beforeLoad() {
  const html = `
    <div class="flex items-center justify-center h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 loading-main-content">
        <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
    </div>
  `;
  const loading = document.querySelector(".loading-main-content");
  if (loading) {
    loading.remove();
  }
  const main = document.getElementById("main-content");
  main.innerHTML = html;
}


async function getLayout(url) {
  const response = await fetch(url);
  return await response.text();
}

async function headerLayout(id) {
  const url = "templates/header.html?ver=" + version;
  const header = document.getElementById(id);
  const data = await getLayout(url);
  header.innerHTML = data;
}

async function mainLayout(id, url) {
  const main = document.getElementById(id);
  if (main.innerHTML) {
    main.innerHTML = "";
  }
  url = url + "?ver=" + version;
  const data = await getLayout(url);
  const loading = document.querySelector(".loading-main-content");
  if (loading) {
    loading.remove();
  }
  main.innerHTML = data;
}


async function footerLayout(id) {
  const url = "templates/footer.html?ver=" + version;
  const footer = document.getElementById(id);
  const data = await getLayout(url);
  footer.innerHTML = data;
}

// load script
async function loadScript(url, id) {
  const script = document.createElement("script");
  script.src = url + "?ver=" + version;
  if (id) {
    document.getElementById(id).appendChild(script);
  } else {
    document.head.appendChild(script);
  }
}