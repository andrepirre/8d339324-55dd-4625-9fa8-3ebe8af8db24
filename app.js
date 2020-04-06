"strict mode";


class HttpClient {
    constructor() {
        this.get = function (aUrl, aCallback) {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = function () {
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                    aCallback(anHttpRequest.responseText);
            };
            anHttpRequest.open("GET", aUrl, true);
            anHttpRequest.send(null);
        };
    }
}


let client = new HttpClient();
client.get('http://127.0.0.1:59333/', function(response) {
   let el = document.getElementById("root");
   el.innerHTML = response;
});