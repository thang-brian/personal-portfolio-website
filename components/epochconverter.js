function updateEpochTime() {
  const epochTimeSpan = document.getElementById("epoch-time");
  // Lấy thời gian Unix epoch hiện tại
  const epochTime = Math.floor(new Date().getTime() / 1000);

  // Cập nhật nội dung của thẻ span
  epochTimeSpan.textContent = epochTime.toString();
}

function updateLocation(){
    const locationSpan = document.getElementById("location");
    const infoIP = getinfoIP();
    const location = "Location: " + infoIP.city + ", " + infoIP.region + ", " + infoIP.country;
    locationSpan.textContent = location;
}

function getTimezone() {
  let API_KEY = "ZY596ITU112Q";
  if (localStorage.getItem("timezones")) {
    const timezones = JSON.parse(localStorage.getItem("timezones"));
    renderTimezone(timezones);
  } else {
    fetch(
      `https://api.timezonedb.com/v2.1/list-time-zone?key=${API_KEY}&format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        const timezones = data.zones.map((zone) => {
          return {
            zoneName: zone.zoneName,
            gmtOffset: zone.gmtOffset,
            countryCode: zone.countryCode,
          };
        });
        localStorage.setItem("timezones", JSON.stringify(timezones));
        renderTimezone(timezones);
      })
      .catch((error) => alert(error));
  }
}

function getinfoIP() {
  let API_KEY = "54adc278c2b630";
  if (sessionStorage.getItem("infoIP")) {
    return JSON.parse(sessionStorage.getItem("infoIP"));
  } else {
    fetch(`https://ipinfo.io/?token=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        const infoIP = data;
        sessionStorage.setItem("infoIP", JSON.stringify(infoIP));
        return infoIP;
      });
  }
}

function renderTimezone(timezones) {
  const timezoneSelect = document.querySelectorAll(".timezone-select");
  const infoIP = getinfoIP();
  const contryCode = infoIP.country;
  const html = timezones.map((timezone) => {
    if (timezone.countryCode === contryCode) {
      return `<option value="${timezone.zoneName}" selected>${timezone.zoneName}</option>`;
    } else {
      return `<option value="${timezone.zoneName}">${timezone.zoneName}</option>`;
    }
  });
  timezoneSelect.forEach((select) => {
    select.innerHTML = html.join("");
  });
}
updateLocation();
setInterval(updateEpochTime, 1000);

getTimezone();

const formUnixToTime = document.querySelector(".form-unix-to-time");
const divresultConvert = document.getElementById("result-convert");
formUnixToTime.addEventListener("submit", function (e) {
  e.preventDefault();
  let unixTime = document.getElementById("unix-time").value;
  if (unixTime === "") {
    unixTime = Math.floor(new Date().getTime() / 1000);
  }
  let timezone = document.getElementById("timezone-select-unix").value;
  let date = new Date(unixTime * 1000);
  console.log(date);
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: timezone,
  }).format(date);
  divresultConvert.innerHTML = `<p class="text-2xl font-semibold text-center">Time: ${formattedTime} | Date: ${date.toLocaleDateString()}
    </p>`;
});

const formTimeToUnix = document.querySelector(".form-time-to-unix");
const divresultConvert2 = document.getElementById("result-convert-unix");
formTimeToUnix.addEventListener("submit", function (e) {
    e.preventDefault();
    let dateTime = document.getElementById("date-time").value; // gia tri cua input datetime-local
    if (dateTime === "") {
      dateTime = new Date();
    }
    let timezone = document.getElementById("timezone-select-date").value;
    const date = new Date(dateTime);
    const formattedTime = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: timezone,
    }).format(date); 
    const unixTime = Math.floor(new Date(formattedTime).getTime() / 1000);
    divresultConvert2.innerHTML = `<p class="text-2xl font-semibold text-center">Unix Time: ${unixTime}
    </p>`;
    }
);
