var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://www.bungie.net/platform/GroupV2/2152633/Members/");
xhr.setRequestHeader("x-api-key", "c78d73dcfe79494ca4152a4cfdb86411");
xhr.send(data);
console.log(JSON.parse(xhr.responseText));