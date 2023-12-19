

    function cal1(){
    let x = document.getElementById('quantity1').value;
    let y = document.getElementById('unitprice1').value;
    document.getElementById('totalprice1').innerHTML =  x * y
    
}

function cal2(){
    let x = document.getElementById('quantity2').value;
    let y = document.getElementById('unitprice2').value;
    document.getElementById('totalprice2').innerHTML =  x * y
    
}

function cal3(){
    let x = document.getElementById('quantity3').value;
    let y = document.getElementById('unitprice3').value;
    document.getElementById('totalprice3').innerHTML =  x * y
    
}

function cal4(){
    let x = document.getElementById('quantity4').value;
    let y = document.getElementById('unitprice4').value;
    document.getElementById('totalprice4').innerHTML =  x * y
    
}

function cal5(){
    let x = document.getElementById('quantity5').value;
    let y = document.getElementById('unitprice5').value;
    document.getElementById('totalprice5').innerHTML =  x * y
    
}

function cal6(){
    let x = document.getElementById('quantity6').value;
    let y = document.getElementById('unitprice6').value;
    document.getElementById('totalprice6').innerHTML =  x * y
    
}

function cal7(){
    let x = document.getElementById('quantity7').value;
    let y = document.getElementById('unitprice7').value;
    document.getElementById('totalprice7').innerHTML =  x * y
    
}

function cal8(){
    let x = document.getElementById('quantity8').value;
    let y = document.getElementById('unitprice8').value;
    document.getElementById('totalprice8').innerHTML =  x * y
    
}

function cal9(){
    let x = document.getElementById('quantity9').value;
    let y = document.getElementById('unitprice9').value;
    document.getElementById('totalprice9').innerHTML =  x * y
    
}

function cal(){
    let x = document.getElementById('quantity').value;
    let y = document.getElementById('unitprice').value;
    document.getElementById('totalprice').innerHTML =  x * y
    
}




function calculate(){
    let cal1 = document.getElementById('totalprice1').innerHTML;
    let cal2 = document.getElementById('totalprice2').innerHTML;
    let cal3 = document.getElementById('totalprice3').innerHTML;
    let cal4 = document.getElementById('totalprice4').innerHTML;
    let cal5 = document.getElementById('totalprice5').innerHTML;
    let cal6 = document.getElementById('totalprice6').innerHTML;
    let cal7 = document.getElementById('totalprice7').innerHTML;
    let cal8 = document.getElementById('totalprice8').innerHTML;
    let cal9 = document.getElementById('totalprice9').innerHTML;
    let cal = document.getElementById('totalprice').innerHTML;

    var labour = document.getElementById('labour').value;
    var total_cal = Number(cal1) + Number(cal2) + Number(cal3) + Number(cal4)+ Number(cal5) + Number(cal6) + Number(cal7) + Number(cal8) + Number(cal9) + Number(cal);
    document.getElementById('total').innerHTML = total_cal;
    document.getElementById('grandtotal'). innerHTML =  total_cal + Number(labour)
}

function add(){
    var table = document.getElementById('table');
    var r = document.getElementById('details');
    var row = table.insertRow(-1);
    row.innerHTML = r.innerHTML;
   
    }


function del(){
    var table = document.getElementById('table').deleteRow(-1);
}


    /*var table = document.getElementById('table');
    var row = table.insertRow(2);
    var cell = row.insertCell()
    var x = document.getElementById('details').cell;
    cell.innerHTML = x

    r.cells[1].innerHTML = x ;
    r.cells[3].innerHTML =  y;


 var table = document.getElementById('table');
    var r = document.getElementById('details');
    let x = document.getElementById('quantity').value;
    let y = document.getElementById('unitprice').value;
    r.cells[1].innerHTML = x ;
    r.cells[3].innerHTML =  y;
    r.cells[4].innerHTML = x * y



}
   /* var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    cell1.innerHtml = 'shdgghsdg';
    cell2.innerHtml = 'sdggjhsjafdh';

}


/*function add(){
    let x = document.getElementById('quantity').value;
    let y = document.getElementById('unitprice').value;
    document.getElementById('totalprice').innerHTML =  x * y
}

function 

/*
 var x = document.getElementById('details').rows[4].cells;
    x[4].innerHTML = quantity * unitprice

document.getElementById('demo').innerHTML = totalprice

totalprice()

function totalprice(){
    let quantity = document.getElementById('quantity').value;
    let unitprice = ducument.getElementById('unitprice').value;
    let totalprice = quantity * unitprice;
    document.getElementById('totalprice').innerHTML = totalprice;
}
 let x = document.getElementById('quantity').value; 
 document.getElementById('demo').innerHTML = x

/*
function insertRow(){
    let x = document.getElementById('details').innerText
    document.getElementById('table').innerHTML = insertRow[x]
}*/