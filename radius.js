//Separate Javascript file to be imported into sphere.html
function pass(e) {
	e.preventDefault();

	let radius = document.getElementById("radius").value;
	if(radius > 0) {
		document.getElementById("message").innerHTML=(1.33333 * Math.PI * radius * radius * radius);
	}
	else {
		alert("Please enter a valid radius");
	}
}