import { series } from './data.js';
var seriesTable = document.getElementById("series");
mostrarSeries(series);
mostrarPromTemporadas();
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\" class=\"table-active\">".concat(serie.id, "</th>\n        <td class=\"table-active\"><a href=\"").concat(serie.link, "\">").concat(serie.nombre, "</a></td>\n        <td class=\"table-active\">").concat(serie.canal, "</td>\n        <td class=\"table-active\">").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
function darPromedioTemporadas(aSeries) {
    var totalTemporadas = 0;
    for (var index = 0; index < aSeries.length; index++) {
        var serie = aSeries[index];
        totalTemporadas += serie.temporadas;
    }
    return totalTemporadas / aSeries.length;
}
function mostrarPromTemporadas() {
    var seriesTbody = document.createElement("tbody");
    var trElement = document.createElement("tr");
    var promedio = darPromedioTemporadas(series);
    trElement.innerHTML = "<td><b>Seasons average: </b></td><td>".concat(promedio, "</td>");
    seriesTbody.appendChild(trElement);
    seriesTable.appendChild(seriesTbody);
}
/*
function mostrarPromTemporadas():void{
    let promedio:number = darPromedioTemporadas(series);
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Seasons average: </b></td><td>${promedio}</td>`;
    promedioTable.appendChild(trElement);
}
*/ 
