var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++)
{
    number[i].addEventListener("click",function()
    {
        var output= document.getElementById("output-value").innerText;
        var num = output + this.id;//Number(output.replace(/,/g,''));
        //num=num+this.id;
        document.getElementById("output-value").innerText=num;//Number(output).toLocaleString("en");
        change(this.id);
    });
}

var operator = document.getElementsByClassName("operator");
for( var i=0;i<operator.length;i++)
{
    operator[i].addEventListener("click",function()
    {
        var num = document.getElementById("output-value").innerText;
        var op=document.getElementById("history-value").innerText;
        if(this.id=="=")
        {
            op = op + num;
            var result = eval(op);
            document.getElementById("output-value").innerText=result;
            document.getElementById("history-value").innerText="";
        }
        else if(this.id=="C")
        {
            document.getElementById("output-value").innerText="";
            document.getElementById("history-value").innerText="";
        }
        else
        {
        op = op + num;
        op= op + this.id;
        document.getElementById("history-value").innerText=op; 
        document.getElementById("output-value").innerText="";
    }
        change(this.id);
    });
} 
document.addEventListener("keypress",function(event)
{
    var d=event.key;
    if((d=='0')||( d=='9')||d=='1'||d=='2'||d=='3'||d=='4'||d=='5'||d=='6'||d=='7'||d=='8')
    {
        var output=""+ document.getElementById("output-value").innerText;
        var num;
        num = ""+document.getElementById(d).innerText;//Number(output.replace(/,/g,''));
        num = output+num;  
        //num=num+this.id;
        document.getElementById("output-value").innerText=num;//Number(output).toLocaleString("en");
    }
    else
    {
        var k=event.key;
        var num =""+ document.getElementById("output-value").innerText;
        var op= ""+document.getElementById("history-value").innerText;
        if(k=="="||k=="Enter")
        {
            op = op + num;
            var result = eval(op);
            document.getElementById("output-value").innerText=result;
            document.getElementById("history-value").innerText="";
        }
        else if(k=="C"||k=='c')
        {
            document.getElementById("output-value").innerText="";
            document.getElementById("history-value").innerText="";
        }
        else
        {
        op = op + num;
        op= op + k;
        document.getElementById("history-value").innerText=op; 
        document.getElementById("output-value").innerText="";}
    }
    change(d);
});
function change( elem)
{
	var d1=document.getElementById(elem);
	d1.classList.add("change");
	setTimeout(function() {
		d1.classList.remove("change");
	  }, 100);
	
}