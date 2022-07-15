var projectName = document.getElementById('project-name');
projectName.style.color='red';


var buttons = document.getElementsByClassName("button");
var displays = document.getElementById('display');
console.log(display);

var operand1 ;
var operand2 ;
var operator ;


for(var i =0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
         
      if(value== "+")
                {
                    operator = "+";
                    operand1 = parseFloat(displays.textContent);
                    console.log(operand1);
                    displays.innerHTML="";
                }
            else if(value== "-")
                {
                    operator = "-";
                    operand1 = parseFloat(displays.textContent);
                    displays.innerHTML="";
                }
            else if(value== "*")
                {
                    operator = "*";
                    operand1 = parseFloat(displays.textContent);
                    displays.innerHTML="";
                }
            else if(value== "/")
                {
                    operator = "/";
                    operand1 = parseFloat(displays.textContent);
                    displays.innerHTML="";
                }
            else if(value== "%")
                {
                    operator = "%";
                    operand1 = parseFloat(displays.textContent);
                    displays.innerHTML="";
                }
            else if(value=="=")
                {
                    operand2 = parseFloat(displays.textContent);
                    console.log(operand2);
                    // var ans = eval(new String(operand1 + operand + operand2));
                    
       var result = eval(operand1 + ' ' + operator + ' ' + operand2);             
                    // console.log(operand1+operator+operand2);
                    console.log(result);
                    displays.innerText = result;  
                    //eval
                    //print resut
                }
            else
            {
            displays.innerText += value;    
            }
        });

      
}


