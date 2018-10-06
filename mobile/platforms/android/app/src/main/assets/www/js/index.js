let isOnline;

var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );
  },

  onDeviceReady: function() {
    this.receivedEvent("deviceready");
    fetch("http://192.168.1.26:3000")
      .then(response => response.json())
      .then(data => {
        document.getElementById("info").innerHTML = dataToHtml.toTable(data);
        localStorage.setItem("data", JSON.stringify(data));
      });
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
    console.log("Received Event: " + id);
  }
};

document.addEventListener("offline", () => setInternetStatus(false), false);
document.addEventListener("online", () => setInternetStatus(true), false);

function setInternetStatus(status) {
  isOnline = status;
  document.getElementById("internetStatus").innerHTML = status
    ? "OK"
    : "Hors Ligne";
}

function onValidateData() {
  // localSave
  localStorage.setItem("data", htmlToData(document.getElementById("info")));
  if (isOnline) {
    fetch("http://192.168.1.26:3000", {
      method: "post",
      body: localStorage.getItem("data"),
      headers: { "Content-type": "application/json" }
    });
  }
}
app.initialize();
