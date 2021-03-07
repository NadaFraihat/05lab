alert("Welcome, Please answer the following Question");
var useName = prompt("Please Enter your name");
document.write('Welcome '+ useName +' to Technology market');
var pcType = prompt("Pc or Laptops? ");
while(pcType != 'Pc' && pcType != 'Laptops')
{
    pcType = prompt("Pc or Laptops ");}
 var orderType ='';
    if (pcType =='Pc')
    {
        alert("Please visit the pink word")
        orderType = '<a href="Pc.html">Welcome</a>';

    }
    else 
    {
        alert("Please visit the blue word")
        orderType = '<a href="">Wlcome</a>';    }
    
