---
---
{% include_relative model.js %}
{% include_relative piano.js %}
{% include_relative notes.js %}


const octaves = 5;

var piano;
var notesCanvas;
var globalMouseDown = false;

function initialiseCanvases() {
	model = new PianolaModel('https://vcnf5f6zo2.execute-api.eu-west-2.amazonaws.com/beta/next-notes?notes=27;;29;;31;;29;;27');
	piano = new Piano('pianoCanvas', octaves, model);
	notesCanvas = new NotesCanvas('notesCanvas', piano);
}

function redrawCanvases() {
	piano.drawKeyboard();
	notesCanvas.draw();
}

document.addEventListener("DOMContentLoaded", initialiseCanvases);
document.addEventListener("mouseup", () => globalMouseDown = false);

var resizeTimeout = false;
const resizeDelay = 40;
window.onresize = function () {
	clearTimeout(resizeTimeout);
	resizeTimeout = setTimeout(redrawCanvases, resizeDelay);
}
