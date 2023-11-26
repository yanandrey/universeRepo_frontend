var backendUrl = "https://fluffy-parakeet-64957j99974crg59-5086.app.github.dev";

function getUrlParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function getJwtToken() {
  var jwtToken = localStorage.getItem("jwtToken");

  if (jwtToken != null) {
    return jwtToken;
  }
  else {
    window.location.href = "login.html";
  }
}

function convertGenderEnumToText(option) {
  switch(option) {
    case 0:
      return "Feminino";
    case 1:
      return "Masculino";
    case 2:
      return "Outro";
    case 3:
      return "Não Informado";
  }
}

function formatDate(date) {
  var part = date.split("-");
  
  var newDate = part[2] + "-" + part[1] + "-" + part[0];  
  return newDate;
}

function showNotification(message) {
  if ('Notification' in window) {
    Notification.requestPermission().then(function (permission) {
      if (permission === 'granted') {
        new Notification('Aviso', {
          body: message
        });
      }
    });
  }
}