 var table = document.getElementById("mainTable") ;
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var response = JSON.parse(this.responseText);

            genTableHead = (table,data) =>
            {
                let thead = table.createTHead();
                let row = thead.insertRow();
                for (let key of data)
                {
                    let th = document.createElement("th");
                    let text = document.createTextNode(key);
                    th.appendChild(text);
                    row.appendChild(th);
                }
            }

            genTable = (table,data) =>
            {
                for(let element of data)
                {
                    let row = table.insertRow();
                    for (key in element)
                    {
                        let cell = row.insertCell();
                        let text = document.createTextNode(element[key]);
                        cell.appendChild(text);
                    }
                }
            }

            let data = Object.keys(response[0]);
            genTableHead(table,data);
            genTable(table,response);

            for (let i=1; i<table.rows.length; i++)
            {
                let row = table.rows[i];
                let col = row.cells[3];
                col.innerHTML = col.innerHTML == "true" ? '<input type="checkbox" checked disabled>' : '<input type="checkbox">' ;
            }

            var promise = new Promise(function(resolve, reject)
            {
                $("input").change(function()
                {
                    var count = 0;
                    for (let i=1; i<table.rows.length; i++)
                    {
                        let row = table.rows[i];
                        let col = row.cells[3];
                        if (col.children[0].checked == true)
                        {
                            count++;
                        } 
                    }
                    const limit = count+5;
                    console.log(limit);
                    console.log(count);
                    // if (count >= limit)
                    // {
                    //     resolve(alert("Congrats. 5 Tasks have been Successfully Completed"));
                    // }
                    // else
                    // {
                    //     reject(alert("Please complete more tasks"));
                    // }
                });
            });

            message = () =>
            {
                promise
                .then(function(done)
                {
                    done;
                })
                .catch(function(error)
                {
                    error;
                })
            }
            message();

        } 
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
    