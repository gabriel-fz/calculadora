// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const remote = require('electron').remote;

  document.getElementById("minimize-btn").addEventListener("click", function (e) {
      remote.getCurrentWindow().minimize()
  });

  document.getElementById("exit-btn").addEventListener("click", function (e) {
       remote.getCurrentWindow().close()
  });
