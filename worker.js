var rad	 = Math.PI/180;

function oscillate()
{
	rad = (rad >= Math.PI*178/180)? (Math.PI/180) : (rad + Math.PI/180);
	postMessage(rad); // post rad back to html page
}

var t = setInterval(oscillate, 16);
