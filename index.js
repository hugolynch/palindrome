const rgb = culori.converter('rgb');

/*
const errorStyle = { backgroundColor: '#FFF0EF', border: '1px solid #FFDBDA' };
const successStyle = { backgroundColor: '#F2F3FB', border: '1px solid #C9CAD6' };


function setElementStyles(elementId, styles) {
    const element = document.getElementById(elementId);
    Object.assign(element.style, styles);
}

function updateColorInput(inputId, colorBoxId) {
    const inputValue = document.getElementById(inputId).value;
    const colorBox = document.getElementById(colorBoxId);
    const color = rgb(inputValue);

    if (color === undefined) {
        setElementStyles(`${inputId}Enter`, ERROR_STYLE);
        setElementStyles(inputId, ERROR_STYLE);
        document.getElementById(`${inputId}Space`).textContent = "?";
    } else {
        setElementStyles(`${inputId}Enter`, SUCCESS_STYLE);
        setElementStyles(inputId, SUCCESS_STYLE);
        colorBox.style.backgroundColor = `rgb(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`;
        // Uncomment the next line if you want to display the color mode
        // document.getElementById(`${inputId}Space`).textContent = color.mode;
    }
}
*/

function convert() {
    let fgInput = document.getElementById('fgInput').value;
    let fgColourBox = document.getElementById('fgColourBox');
    let fgColour = rgb(fgInput);

    let bgInput = document.getElementById('bgInput').value;
    let bgColourBox = document.getElementById('bgColourBox');
    let bgColour = rgb(bgInput);

    if (fgColour === undefined) {
        document.getElementById('fgEnter').style.backgroundColor = '#FFF0EF';
        document.getElementById('fgEnter').style.border = '1px solid #FFDBDA';
        document.getElementById('fgInput').style.backgroundColor = '#FFF0EF';
        document.getElementById('fgSpace').textContent = "?";
    } else {
        document.getElementById('fgEnter').style.backgroundColor = '#F2F3FB';
        document.getElementById('fgEnter').style.border = '1px solid #C9CAD6';
        document.getElementById('fgInput').style.backgroundColor = '#F2F3FB';
        document.getElementById('fgColourBox').style.backgroundColor = `rgb(${fgColour.r*255}, ${fgColour.g*255}, ${fgColour.b*255})`;
        //console.log(fgColour.mode);
        //document.getElementById('fgSpace').textContent = fgColour.mode;
    } if (bgColour === undefined) {
        document.getElementById('bgEnter').style.backgroundColor = '#FFF0EF';
        document.getElementById('bgEnter').style.border = '1px solid #FFDBDA';
        document.getElementById('bgInput').style.backgroundColor = '#FFF0EF';
    } else {
        document.getElementById('bgEnter').style.backgroundColor = '#F2F3FB';
        document.getElementById('bgEnter').style.border = '1px solid #C9CAD6';
        document.getElementById('bgInput').style.backgroundColor = '#F2F3FB';
        document.getElementById('bgColourBox').style.backgroundColor = `rgb(${bgColour.r*255}, ${bgColour.g*255}, ${bgColour.b*255})`;
    };

    calculateAPCA();
}

function swap() {
    // Swap fg and bg colours
    var fgInput = document.getElementById('fgInput').value;
    var bgInput = document.getElementById('bgInput').value;

    document.getElementById('fgInput').value = bgInput;
    document.getElementById('bgInput').value = fgInput;

    convert();
    calculateAPCA();
}

function calculateAPCA() {
    var fgInput = document.getElementById('fgInput').value;
    var bgInput = document.getElementById('bgInput').value;

    let fg = rgb(fgInput);
    let bg = rgb(bgInput);

    if (validColour(fg) && validColour(bg)) {
        var result = contrast(fg, bg);

        var outputDiv = document.getElementById('Lc');
        outputDiv.textContent = 'Lc ' + result.toFixed(2);
        outputDiv.style.color = document.getElementById('Lc').color = `rgb(${fg.r*255}, ${fg.g*255}, ${fg.b*255})`;
        outputDiv.style.backgroundColor = document.getElementById('Lc').backgroundColor = `rgb(${bg.r*255}, ${bg.g*255}, ${bg.b*255})`;

    } else {
        var outputDiv = document.getElementById('Lc');
        outputDiv.textContent = 'Error';
        outputDiv.style.color = "#AC5254";
        outputDiv.style.backgroundColor = "#FFF0EF";
    } 
    
    /*if (validColour(fg)) {
        var outputDiv = document.getElementById('fgInput');
        outputDiv.style.backgroundColor = '#F2F3FB';
    } else {
        var outputDiv = document.getElementById('fgInput');
        outputDiv.style.backgroundColor = '#FFF0EF';
    } if (validColour(bg)) {
        var outputDiv = document.getElementById('bgInput');
        outputDiv.style.backgroundColor = '#F2F3FB';
    } else {
        var outputDiv = document.getElementById('bgInput');
        outputDiv.style.backgroundColor = '#FFF0EF'; 
    }
    */
}

function validColour(colour) {
    return colour !== undefined;
};