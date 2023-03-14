import React from 'react'
// checkimg button functionality

function Button() {
	function buttonPressed(){
		alert("button clicked");
	}
	return (
		<div>
			<button onClick={buttonPressed}>Click me </button>
		
		</div>
	)
}

export default Button