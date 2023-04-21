import React from "react";
import "../styles/boton.css"
function Buttonaction({ text, clickButton, tryClick }) {

	return(
		<button  className={ clickButton ? "boton-click" : "boton-reiniciar" }  onClick={tryClick}>
			{text}
		</button>
	);
}
export {Buttonaction}