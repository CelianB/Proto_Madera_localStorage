"use strict";
const htmlToData = html => {
  let data = {};

  const titres = getTextContent(html.getElementsByTagName("h2"));
  const body = html.getElementsByTagName("tbody");

  for (let i in titres) {
    let titre = titres[i];
    data[titre] = [];
    let champs = getTextContent(body[i].getElementsByTagName("th"));

    let rows = body[i].getElementsByTagName("tr");
    for (let row = 0; row < rows.length; row++) {
      let values = rows[row].getElementsByTagName("td");
      if (values.length > 0) {
        var elem = {};
        for (let col = 0; col < values.length; col++) {
          elem[champs[col]] = typeParsing(champs[col], values[col].textContent);
        }
        data[titre].push(elem);
      }
    }
  }
  return JSON.stringify(data);
};
function getTextContent(htmlList) {
  let arr = [];
  for (var i = 0; i < htmlList.length; i++) {
    arr.push(htmlList[i].textContent);
  }
  return arr;
}
function typeParsing(champ, values) {
  if (champ.includes("ID")) {
    return tryParseInt(values, values);
  }
  if (values === "true") return true;
  if (values === "false") return false;
  else return values;
}

function tryParseInt(str, defaultValue) {
  var retValue = defaultValue;
  if (str !== null) {
    if (str.length > 0) {
      if (!isNaN(str)) {
        retValue = parseInt(str);
      }
    }
  }
  return retValue;
}

module.exports = htmlToData;
