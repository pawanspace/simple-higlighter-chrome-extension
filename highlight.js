function highlight(){
	var range = window.getSelection().getRangeAt(0);
	var selectedLines = range.toString().split("\n");

	if(range.toString().trim() === ""){
		return;
	}

	for (var i = selectedLines.length - 1; i >= 0; i--) {
		if(selectedLines[i].trim() === ""){
			alert("Selecting blank lines won't highlight text. Please select proper text");
			return;
		}
	}

	var wrapper = document.createElement('span');
	wrapper.style.cssText = "background-color: #FFFFC2";
	wrapper.appendChild(range.extractContents());	
	range.insertNode(wrapper);
}

document.addEventListener("mouseup", highlight);
document.addEventListener("mouseup", highlight);