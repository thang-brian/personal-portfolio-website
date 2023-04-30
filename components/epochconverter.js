const epochTimeSpan = document.getElementById("epoch-time");

function updateEpochTime() {
  // Lấy thời gian Unix epoch hiện tại
  const epochTime = Math.floor(new Date().getTime() / 1000);

  // Cập nhật nội dung của thẻ span
  epochTimeSpan.textContent = epochTime.toString();
}

function getTimezone() {
    let API_KEY = 'ZY596ITU112Q';
    if (localStorage.getItem('timezones')) {
        const timezones = JSON.parse(localStorage.getItem('timezones'));
        renderTimezone(timezones);
    }
    else {
        fetch(`http://api.timezonedb.com/v2.1/list-time-zone?key=${API_KEY}&format=json`)
        .then(response => response.json())
        .then(data => {
            const timezones = data.zones.map(zone => {
                return {
                    zoneName: zone.zoneName,
                    gmtOffset: zone.gmtOffset,
                    countryCode: zone.countryCode
                }
            });
            localStorage.setItem('timezones', JSON.stringify(timezones));
            renderTimezone(timezones);
        });
    }
}

function getinfoIP() {
    let API_KEY = '54adc278c2b630';
    if (localStorage.getItem('infoIP')) {
        return JSON.parse(localStorage.getItem('infoIP'));
    }
    else {
        fetch(`https://ipinfo.io/?token=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const infoIP = data;
            localStorage.setItem('infoIP', JSON.stringify(infoIP));
            return infoIP;
        });
    }
}

function renderTimezone(timezones) {
    const timezoneSelect = document.getElementById('timezone-select');
    const infoIP = getinfoIP();
    const contryCode = infoIP.country;
    const html = timezones.map(timezone => {
        if (timezone.countryCode === contryCode) {
            return `<option value="${timezone.zoneName}" selected>${timezone.zoneName}</option>`;
        }
        else {
            return `<option value="${timezone.zoneName}">${timezone.zoneName}</option>`;
        }
    }
    );
    timezoneSelect.innerHTML = html.join('');
}

setInterval(updateEpochTime, 1000);

getTimezone();

const formUnixToTime = document.querySelector('.form-unix-to-time');
const divresultConvert = document.getElementById('result-convert');
formUnixToTime.addEventListener('submit', function(e) {
    e.preventDefault();
    const unixTime = document.getElementById('unix-time').value;
    const timezone = document.getElementById('timezone-select').value;
    const date = new Date(unixTime * 1000);
    const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: timezone
    }).format(date);
    divresultConvert.innerHTML = `<p class="text-2xl font-semibold text-center">Time: ${formattedTime}</p>`;
});

