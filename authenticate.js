//Separate Javascript file to be imported into form.html
function pass(e) {
	e.preventDefault();

	let password = document.getElementById("password").value;
	if(password === "12345678") {
		document.getElementById("message").innerText="You cheater";
	}
	else {
		alert("Try again");
	}
}