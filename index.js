const rgb = culori.converter('rgb');

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
        document.getElementById('fgSpace').textContent = "?";
        document.getElementById('Lc').style.border = '1px solid #FFDBDA';
    } else {
        document.getElementById('fgEnter').style.backgroundColor = '#F2F3FB';
        document.getElementById('fgEnter').style.border = '1px solid #C9CAD6';
        document.getElementById('Lc').style.border = '1px solid #C9CAD6';
        document.getElementById('fgColourBox').style.backgroundColor = `rgb(${fgColour.r*255}, ${fgColour.g*255}, ${fgColour.b*255})`;
        //console.log(fgInput.mode);
        //document.getElementById('fgSpace').textContent = fgColour.mode;
    } if (bgColour === undefined) {
        document.getElementById('bgEnter').style.backgroundColor = '#FFF0EF';
        document.getElementById('bgEnter').style.border = '1px solid #FFDBDA';
        document.getElementById('Lc').style.border = '1px solid #FFDBDA';
    } else {
        document.getElementById('bgEnter').style.backgroundColor = '#F2F3FB';
        document.getElementById('bgEnter').style.border = '1px solid #C9CAD6';
        document.getElementById('Lc').style.border = '1px solid #C9CAD6';
        document.getElementById('bgColourBox').style.backgroundColor = `rgb(${bgColour.r*255}, ${bgColour.g*255}, ${bgColour.b*255})`;
    };

    calculateAPCA();
}

function swap() {
    // Swap fg and bg colours
    let fgInput = document.getElementById('fgInput').value;
    let bgInput = document.getElementById('bgInput').value;

    document.getElementById('fgInput').value = bgInput;
    document.getElementById('bgInput').value = fgInput;

    convert();
    calculateAPCA();
}

function calculateAPCA() {
    let fgInput = document.getElementById('fgInput').value;
    let bgInput = document.getElementById('bgInput').value;

    let fg = rgb(fgInput);
    let bg = rgb(bgInput);

    if (validColour(fg) && validColour(bg)) {
        let result = contrast(fg, bg);

        let outputDiv = document.getElementById('Lc');
        outputDiv.textContent = 'Lc ' + result.toFixed(2);
        outputDiv.style.color = document.getElementById('Lc').color = `rgb(${fg.r*255}, ${fg.g*255}, ${fg.b*255})`;
        outputDiv.style.backgroundColor = document.getElementById('Lc').backgroundColor = `rgb(${bg.r*255}, ${bg.g*255}, ${bg.b*255})`;

    } else {
        let outputDiv = document.getElementById('Lc');
        outputDiv.textContent = 'Error';
        outputDiv.style.color = "#AC5254";
        outputDiv.style.backgroundColor = "#FFF0EF";
    } 
}

function validColour(colour) {
    return colour !== undefined;
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fgInput').addEventListener('input', function() {
        convert();
    });

    document.getElementById('bgInput').addEventListener('input', function() {
        convert();
    });

    document.getElementById('convertInput').addEventListener('input', function() {
        table();
    });
});

function table() {
    let convertInput = document.getElementById('convertInput').value;
    let convertColourBox = document.getElementById('convertColourBox');
    let convertColour = rgb(convertInput);

    let toRGB = culori.converter('rgb');
    let toOKLCh = culori.converter('oklch');

    let inputValue = document.getElementById('convertInput').value;

    let inputRGB = toRGB(inputValue);
    let inputHex = culori.formatHex(toRGB(inputValue));
    let inputOKLCh = toOKLCh(inputValue);

    if (convertColour === undefined) {
        document.getElementById('convertEnter').style.backgroundColor = '#FFF0EF';
        document.getElementById('convertEnter').style.border = '1px solid #FFDBDA';
        document.getElementById('convertSpace').textContent = "?";
        document.getElementById('convertColourBox').style.backgroundColor = '#FFF0EF';
        document.getElementById('convertColourBox').style.border = '1px solid #FFDBDA';
    } else {
        document.getElementById('convertEnter').style.backgroundColor = '#F2F3FB';
        document.getElementById('convertEnter').style.border = '1px solid #C9CAD6';
        document.getElementById('convertColourBox').style.backgroundColor = `${convertColour.mode}(${convertColour.r*255}, ${convertColour.g*255}, ${convertColour.b*255})`;
        document.getElementById('convertColourBox').style.border = '1px solid #C9CAD6';
        document.getElementById('colourRGB').textContent = `rgb(${inputRGB.r*255}, ${inputRGB.g*255}, ${inputRGB.b*255})`;
        document.getElementById('colourHex').textContent = inputHex;
        document.getElementById('colourOKLCh').textContent = `${inputOKLCh.mode}(${(inputOKLCh.l*100).toFixed(2)}% ${inputOKLCh.c.toFixed(3)} ${inputOKLCh.h.toFixed(2)})`;
    };
};