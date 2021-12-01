const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function loader(){
	document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
	setInterval(loader, 3000);
  }
  
  window.onload = fadeOut;