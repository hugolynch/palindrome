const rgb = culori.converter('rgb');

function convert() {
    let fgInput = document.getElementById('fgInput').value;
    let fgColourBox = document.getElementById('fgColourBox');
    let fgColour = rgb(fgInput);

    let bgInput = document.getElementById('bgInput').value;
    let bgColourBox = document.getElementById('bgColourBox');
    let bgColour = rgb(bgInput);

    if (fgColour === undefined) {
        document.getElementById('fgEnter').style.backgroundColor = 'pink';
        document.getElementById('fgInput').style.backgroundColor = 'pink';

    } else {
        document.getElementById('fgEnter').style.backgroundColor = 'F2F3FB';
        document.getElementById('fgInput').style.backgroundColor = 'F2F3FB';
        document.getElementById('fgColourBox').style.backgroundColor = `rgb(${fgColour.r*255}, ${fgColour.g*255}, ${fgColour.b*255})`;

        fgColour.textContent = `rgb(${fgColour.r*255}, ${fgColour.g*255}, ${fgColour.b*255})`;
    }

    if (bgColour === undefined) {
        document.getElementById('bgEnter').style.backgroundColor = 'pink';
        document.getElementById('bgInput').style.backgroundColor = 'pink';

    } else {
        document.getElementById('bgEnter').style.backgroundColor = 'F2F3FB';
        document.getElementById('bgInput').style.backgroundColor = 'F2F3FB';
        document.getElementById('bgColourBox').style.backgroundColor = `rgb(${bgColour.r*255}, ${bgColour.g*255}, ${bgColour.b*255})`;

        bgColour.textContent = `rgb(${bgColour.r*255}, ${bgColour.g*255}, ${bgColour.b*255})`;
    }
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

    // Additional validation
    if (validColour(fg) && validColour(bg)) {
        var result = contrast(fg, bg);
        console.log(result);

        var outputDiv = document.getElementById('Lc');
        outputDiv.textContent = 'Lc ' + result.toFixed(2);
        // Reset the style for valid inputs
        outputDiv.style.color = 'black';  // Reset text color
        outputDiv.style.backgroundColor = 'white';  // Reset background color

    } else {
        // Display 'Invalid' and change style for invalid inputs
        var outputDiv = document.getElementById('Lc');
        outputDiv.textContent = 'Error';
        outputDiv.style.color = 'white';  // Set text color to white for better visibility
        outputDiv.style.backgroundColor = 'red';  // Set background color to red for emphasis
    }

    if (validColour(fg)) {
        var outputDiv = document.getElementById('fgInput');
        outputDiv.style.backgroundColor = 'white';
    } else {
        var outputDiv = document.getElementById('fgInput');
        outputDiv.style.backgroundColor = 'pink';
    }

    if (validColour(bg)) {
        var outputDiv = document.getElementById('bgInput');
        outputDiv.style.backgroundColor = 'white';
        
    } else {
        var outputDiv = document.getElementById('bgInput');
        outputDiv.style.backgroundColor = 'pink'; 
    }
}

function validColour(colour) {
    return colour !== undefined;
};