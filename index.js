

function removeBreaks(){
	var inputText = document.getElementById("textBox").value;
	var find = ("<br>", "</br>", "< /br>", "< / br>", "<br/>", "<br />", "<br / >");
	var fixIt = new RegExp(find, "g");
	var outputText = inputText.replace(fixIt, " ");
	document.getElementById("outputArea").innerHTML = outputText;	
}

function itemizeIngredients(){
	var inputText = document.getElementById("textBox").value;
	var find = ",";
	var fixIt = new RegExp(find, "g");
	var outputText = inputText.replace(fixIt, "<br>");
	document.getElementById("outputArea").innerHTML = outputText;
}