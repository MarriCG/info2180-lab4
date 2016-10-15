function chgcol(){
document.getElementById("boundary1").className="youlose";}

//mousecol changes boundary1 colour onmouseover
function mousecol(){
	onmouseover=chgcol;
}

window.onload=mousecol;
/*The above code does change the class to "youlose":
if you inspect boundary 1 it's class is changed
...
but there is no difference in colour displayed
so I dont know why this  isn't working. I tried
but really don't know how to fix this.*/
