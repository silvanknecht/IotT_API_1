let url = 'http://localhost:3000/';

(function () {
    fetch(url + 'devices/')
        .then(res => {
            return res.json();
        })
        .then(body => {
                for(let sens in body){
                var table = document.getElementById("devices");
                var row = table.insertRow(-1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML =  body[sens].name;
                cell2.innerHTML =  body[sens].state;
                cell3.innerHTML =  body[sens].value;
            }

        })
})();