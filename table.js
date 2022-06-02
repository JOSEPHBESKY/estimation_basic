var button = document.getElementById('btn')
button.addEventListener('click', table)
// create table
function table() {
    var tables =  '<tr>' +
    '<th>Accessories</th>' +
    '<th>Unitprice</th>' +
    '<th>Qty</th>' +
    '<th>Price</th>' +
    '<th>Action</th>' +

    '</tr>' +
    '<tr>' +
    '<th>Frame</th>' +
    '<td><input type="number" name="number" id="price"></td>' +
    '<td><input type="number" name="number" id="qty"></td>' +
    '<td><input type="number" name="number" id="total"></td>'+
    '<td><button id="btn1">+</button><button id="btn2">x</button></td>'+
    '</tr>'+'<tr>'+'<th>total</th>' + '<td>'+'<input id="grandtotal" ></input>'+'</td>'+'</tr>'
    console.log(tables);
    document.getElementById('tables').innerHTML = tables
    var button2=document.getElementById('btn1')
button2.addEventListener('click',addrow)
// sum of calculation
function calculate() {
    var price=document.getElementById('price').value;
    var qty=document.getElementById('qty').value;
    var total=price*qty;
    document.getElementById('total').value=total;
}
var total1= document.getElementById('total')
    total1.addEventListener('mouseenter',calculate)
    function clearall() {
        document.getElementById('price').value=""
    document.getElementById('qty').value=""
    var total=price*qty;
    document.getElementById('total').value="" 
    }
 var btn2=document.getElementById('btn2')
btn2.addEventListener('click',clearall)
// grandtotal
var x=0
function grand() {
    var total1=document.getElementById('total').value
    document.getElementById('grandtotal').value=total1
}
 var gt=document.getElementById('grandtotal')
 gt.addEventListener('mouseenter',grand)
// add new row
function addrow() {
    var emptytable = '<table border="1">' +
        '<tr>' +
        '<th><input type="text" name="text" id=""></th>' +
        '<td><input type="number" name="number" id="price1"></td>' +
        '<td><input type="number" name="number" id="qty1"></td>' +
        '<td><input type="number" name="number" id="total1"></td>' +
        '<td>'+'<button id="btn3">x</button>'+ '<button id="btn4">+</button>'+'</td>'
        '</tr>' +
        '</table>'
       var emptyrow= document.getElementById('tables')
var emptyrow1=emptyrow.insertRow(2)
emptyrow1.innerHTML=emptytable  
var btn4=document.getElementById('btn4')
btn4.addEventListener('click',addrow)  

// sum of calculation
function calculate1() {
    var price1=document.getElementById('price1').value;
    var qty1=document.getElementById('qty1').value;
    var total1=price1*qty1;
    document.getElementById('total1').value=total1;
}
var total2= document.getElementById('total1')
    total2.addEventListener('mouseenter',calculate1)
    function clearall1() {
        document.getElementById('price1').value=""
    document.getElementById('qty1').value=""
    var total=price*qty;
    document.getElementById('total1').value="" 
    }
 var btn3=document.getElementById('btn3')
btn3.addEventListener('click',clearall1)

}
// grandtotal
function grand1() {
    var total2=document.getElementById('total1').value
   var total3= document.getElementById('total').value
   var total4=total1+total3
    document.getElementById('grandtotal').value =total4
}
var gt=document.getElementById('grandtotal')
gt.addEventListener('mouseenter',grand1)

}
