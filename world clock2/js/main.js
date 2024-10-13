//window.alert("HA BHai aa gaya swaaddd!");
//"use strict" - is used to make strict mode of 

function getTime()
{
var d=new Date();

//window.alert(d);

var a=d.toLocaleString('US-en',
{
timeZone:'Asia/Kolkata',
//dateStyle:'full',
//timeStyle:'long',
}
);
//window.alert(a);

var b=d.toLocaleString
(
'US-en',
{
timeZone:'Asia/Shanghai',
}
);

var c=d.toLocaleString
(
'US-en',
{
timeZone:'Asia/Dubai',
}
);

document.getElementById("india").innerHTML=a.split(', ')[1];
document.getElementById("china").innerHTML=b.split(', ')[1];
document.getElementById("dubai").innerHTML=c.split(', ')[1];

}


getTime();

setInterval(()=>{
getTime();
},1000)




