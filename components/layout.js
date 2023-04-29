"use strict";

function headerLayout(id) {
  const header = document.getElementById(id);
  header.innerHTML = `
  <nav class="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
    <div class="container mx-auto py-5 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img class="w-8" src="./img/logo.png" alt="" />
        <span class="text-2xl font-bold text-indigo-900 dark:text-white"
          >TTT</span
        >
      </div>
      <ul
        class="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase"
      >
        <li class="hover:text-gray-500">
          <a href="#">homepage</a>
        </li>
        <li class="hover:text-gray-500">
          <a href="#about">about me</a>
        </li>
        <li class="hover:text-gray-500">
          <a href="#services">services</a>
        </li>
        <li class="hover:text-gray-500">
          <a href="#works">works</a>
        </li>
        <li>
          <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
            <span>Tool</span>
          </button>
          
          <!-- Dropdown menu -->
          <div id="dropdownDotsHorizontal" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
              </ul>
              <div class="py-2">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
              </div>
          </div>
        </li>
      </ul>
      <img
        id="moon"
        src="./img/moon.png"
        class="hidden md:block w-5 cursor-pointer"
        alt=""
      />
      <div id="hamburger" class="space-y-1 md:hidden cursor-pointer z-20">
        <div class="w-6 h-0.5 bg-black"></div>
        <div class="w-6 h-0.5 bg-black"></div>
        <div class="w-6 h-0.5 bg-black"></div>
      </div>
      <ul
        id="menu"
        class="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"
      >
        <li>
          <a id="hLink" href="#">homepage</a>
        </li>
        <li>
          <a id="hLink" href="#about">about me</a>
        </li>
        <li>
          <a id="hLink" href="#services">services</a>
        </li>
        <li>
          <a id="hLink" href="#works">works</a>
        </li>
        <li>
          <a id="hLink" href="#contact">contact</a>
        </li>
      </ul>
    </div>
  </nav>
  `;
}

function footerLayout(id) {
  const footer = document.getElementById(id);
  let year = new Date().getFullYear();
  footer.innerHTML = `
  <div class="w-full bg-gray-800">
      <div class="container mx-auto py-5 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img class="w-8" src="./img/logo.png" alt="" />
          <span class="text-2xl font-bold text-white">TTT</span>
        </div>
        <span class="hidden md:block font-medium text-white"
          >© ${year} TTT Design with ♥️ by Thang Than.</span
        >
        <div class="flex gap-2">
          <img class="w-4 cursor-pointer" src="./img/facebook.png" alt="" />
          <img class="w-4 cursor-pointer" src="./img/instagram.png" alt="" />
          <img class="w-4 cursor-pointer" src="./img/twitter.png" alt="" />
          <img class="w-4 cursor-pointer" src="./img/linkedin.png" alt="" />
        </div>
      </div>
    </div>
  `;
}