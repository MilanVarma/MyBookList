var author = document.getElementById('a1');
var title = document.getElementById('a2');
var ISBN = document.getElementById('a3');
var form = document.getElementById('form');

form.addEventListener('submit',AddValue);

function AddValue(e)
{
    
    if(author.value == ""|| title.value == "" || ISBN.value == "" )
    {
        e.preventDefault()
        var error = document.getElementById('error');
        error.style.background = 'red';
        error.innerHTML = "Fill all the Fields";
        setInterval(() => error.remove() ,3000)
    }
    else{
        var error = document.getElementById('error');
        error.style.background = 'green';
        error.innerHTML = "Success";
        setInterval(() => error.remove(),3000)
    
    
    e.preventDefault()
    var table = document.getElementById('table')
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(author.value))

    var td1 = document.createElement('td');
    td1.appendChild(document.createTextNode(title.value))

    var td2 = document.createElement('td');
    td2.appendChild(document.createTextNode(ISBN.value))

    var tr = document.createElement('tr')
    tr.appendChild(td)

    var tr1 = document.createElement('tr')
    tr.appendChild(td1)

    var tr2 = document.createElement('tr')
    tr.appendChild(td2)
    
    table.appendChild(tr)
    table.appendChild(tr1)
    table.appendChild(tr2)

    }
    
}

author.addEventListener('click',B);

title.addEventListener('click',B);
ISBN.addEventListener('click',B);

function B(e)
{
    e.preventDefault()
    author.style.color = "rgb(19, 142, 243)";
    title.style.color = "rgb(19, 142, 243)";
    ISBN.style.color = "rgb(19, 142, 243)";
}

