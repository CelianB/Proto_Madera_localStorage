"use strict";
const dataToHtml = {
  toList: datas => {
    let html = "";
    for (let data in datas) {
      html += `<ul><h2>${data}: </h2> `;
      for (let info in datas[data]) {
        html += `<li> ${info} : `;
        for (let spec in datas[data][info]) {
          html += ` <b>${spec}</b> : ${datas[data][info][spec]}`;
        }
        html += `</li>`;
      }
      html += "</ul>";
    }
    return html;
  },
  toTable: datas => {
    let html = "";
    for (let data in datas) {
      html += `<h2>${data}: </h2>`;
      html += "<table>";
      html += "<tr>";

      // th
      for (let info in datas[data]) {
        for (let head in datas[data][info]) {
          html += `<th>${head}</th>`;
        }
        break;
      }
      html += "</tr>";

      //td
      for (let info in datas[data]) {
        html += "<tr>";
        for (let spec in datas[data][info]) {
          html += `<td>${datas[data][info][spec]}</td>`;
        }
        html += "</tr>";
      }
      html += "</table>";
    }
    return html;
  }
};

module.exports = dataToHtml;
