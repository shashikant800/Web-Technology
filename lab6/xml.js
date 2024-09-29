async function main() {
    const res = await fetch('./test.xml').then(res=>res.text());
    const xmlDom = new DOMParser().parseFromString(res, 'application/xml');
    const students = xmlDom.querySelectorAll('student');
    const table = document.createElement('table');
    const head = ['name', 'roll', 'year', 'department', 'university'];
    const th = document.createElement('thead');
    const tr = document.createElement('tr');
    head.forEach(cellData => {
        const td = document.createElement('td');
        td.innerText = cellData;
        tr.append(td);
    });
    th.append(tr);
    table.append(th);

    const  tbody = document.createElement('tbody');
    students.forEach(student => {
        const tr = document.createElement('tr');
        head.forEach(cellData => {
            const td = document.createElement('td');
            td.innerText = student.getAttribute(cellData);
            tr.append(td);
        }); 
        tbody.append(tr);
    });
    table.append(tbody);
    $("#root").innerHTML = "";
    $("#root").append(table);
}

onload = main;

function $(el) {
    return document.querySelector(el);
}

