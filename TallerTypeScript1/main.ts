import {Serie} from './series.js';
import {series} from './data.js';

let seriesTable:HTMLElement=document.getElementById("series")!;
//let promedioTable:HTMLElement = document.getElementById("promedio")!;

mostrarSeries(series);
mostrarPromTemporadas();

function mostrarSeries(series:Serie[]):void
{
    let seriesTbody:HTMLElement = document.createElement("tbody");
    for(let serie of series)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<th scope="row" class="table-active">${serie.id}</th>
        <td class="table-active"><a href="${serie.link}">${serie.nombre}</a></td>
        <td class="table-active">${serie.canal}</td>
        <td class="table-active">${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}

function darPromedioTemporadas(aSeries: Serie[]):number{
    let totalTemporadas:number=0;
    for(let index = 0; index <aSeries.length;index++)
    {
        let serie: Serie = aSeries[index];
        totalTemporadas+=serie.temporadas;
    }
    return totalTemporadas/aSeries.length;
}

function mostrarPromTemporadas():void{
    let seriesTbody:HTMLElement = document.createElement("tbody");
    let trElement: HTMLElement = document.createElement("tr");
    let promedio:number = darPromedioTemporadas(series);
    trElement.innerHTML = `<td><b>Seasons average: </b></td><td>${promedio}</td>`;
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