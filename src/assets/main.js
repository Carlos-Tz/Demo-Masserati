var modal = document.getElementById('myModal');
var span = document.getElementById('close');
var canvas = document.getElementById('canvas');
var modal2 = document.getElementById('myModal2');
var span2 = document.getElementById('close2');
var canvas2 = document.getElementById('canvas2');
var modal3 = document.getElementById('myModal3');
var span3 = document.getElementById('close3');
var canvas3 = document.getElementById('canvas3');
var modal4 = document.getElementById('myModal4');
var span4 = document.getElementById('close4');
var canvas4 = document.getElementById('canvas4');
var modal5 = document.getElementById('myModal5');
var span5 = document.getElementById('close5');
var canvas5 = document.getElementById('canvas5');
var modal6 = document.getElementById('myModal6');
var span6 = document.getElementById('close6');
var canvas6 = document.getElementById('canvas6');

var signaturePad = new SignaturePad(canvas, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});

var signaturePad2 = new SignaturePad(canvas2, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
var signaturePad3 = new SignaturePad(canvas3, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
var signaturePad4 = new SignaturePad(canvas4, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
var signaturePad5 = new SignaturePad(canvas5, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
var signaturePad6 = new SignaturePad(canvas6, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});


function btn_click() {
    modal.style.display = "block";
    resizeCanvas();
}
function btn_click2() {
    modal2.style.display = "block";
    resizeCanvas2();
}
function btn_click3() {
    modal3.style.display = "block";
    resizeCanvas3();
}
function btn_click4() {
    modal4.style.display = "block";
    resizeCanvas4();
}
function btn_click5() {
    modal5.style.display = "block";
    resizeCanvas5();
}
function btn_click6() {
    modal6.style.display = "block";
    resizeCanvas6();
}
function btn_clear() {
    document.getElementById('imgSign').src = '';
    document.getElementById('imgSign2').src = '';
    document.getElementById('imgSign5').src = '';
    document.getElementById('imgSign6').src = '';
    document.getElementById('imgSignS').src = '';
    // document.getElementById('imgSignS2').src = '';
    document.getElementById('im1').value = '';
    document.getElementById('im2').value = '';
    document.getElementById('im3').value = '';
    document.getElementById('im4').value = '';
    document.getElementById('im5').value = '';
    document.getElementById('im6').value = '';
    document.getElementById('im7').value = '';
    document.getElementById('im8').value = '';
    document.getElementById('ci1').style.backgroundImage = 'none';
    document.getElementById('ci2').style.backgroundImage = 'none';
    document.getElementById('ci3').style.backgroundImage = 'none';
    document.getElementById('ci4').style.backgroundImage = 'none';
    document.getElementById('ci5').style.backgroundImage = 'none';
    document.getElementById('ci6').style.backgroundImage = 'none';
    /* document.getElementById('ci7').style.backgroundImage = 'none';
    document.getElementById('ci8').style.backgroundImage = 'none'; */
  }
span.onclick = function () {
    modal.style.display = "none";
    document.getElementById('imgSign').src = signaturePad.toDataURL();
}
span2.onclick = function () {
    modal2.style.display = "none";
    document.getElementById('imgSign2').src = signaturePad2.toDataURL();
}
span3.onclick = function () {
    modal3.style.display = "none";
    document.getElementById('imgSignS').src = signaturePad3.toDataURL();
}
span4.onclick = function () {
    modal4.style.display = "none";
    document.getElementById('imgSign2S').src = signaturePad4.toDataURL();
}
span5.onclick = function () {
    modal5.style.display = "none";
    document.getElementById('imgSign5').src = signaturePad5.toDataURL();
}
span6.onclick = function () {
    modal6.style.display = "none";
    document.getElementById('imgSign6').src = signaturePad6.toDataURL();
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById('imgSign').src = signaturePad.toDataURL();
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
        document.getElementById('imgSign2').src = signaturePad2.toDataURL();
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
        document.getElementById('imgSignS').src = signaturePad3.toDataURL();
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
        document.getElementById('imgSign2S').src = signaturePad4.toDataURL();
    }
    if (event.target == modal5) {
        modal5.style.display = "none";
        document.getElementById('imgSign5').src = signaturePad5.toDataURL();
    }
    if (event.target == modal6) {
        modal6.style.display = "none";
        document.getElementById('imgSign6').src = signaturePad6.toDataURL();
    }
}

function resizeCanvas() {
    var w = modal.clientWidth;
    var h = modal.clientHeight;
    canvas.width = Math.ceil(w * 0.75);
    canvas.height = Math.ceil(h * 0.7);
    signaturePad.clear();
}
function resizeCanvas2() {
    var w = modal2.clientWidth;
    var h = modal2.clientHeight;
    canvas2.width = Math.ceil(w * 0.75);
    canvas2.height = Math.ceil(h * 0.7);
    signaturePad2.clear();
}
function resizeCanvas3() {
    var w = modal3.clientWidth;
    var h = modal3.clientHeight;
    canvas3.width = Math.ceil(w * 0.75);
    canvas3.height = Math.ceil(h * 0.7);
    signaturePad3.clear();
}
function resizeCanvas4() {
    var w = modal4.clientWidth;
    var h = modal4.clientHeight;
    canvas4.width = Math.ceil(w * 0.75);
    canvas4.height = Math.ceil(h * 0.7);
    signaturePad4.clear();
}
function resizeCanvas5() {
    var w = modal5.clientWidth;
    var h = modal5.clientHeight;
    canvas5.width = Math.ceil(w * 0.75);
    canvas5.height = Math.ceil(h * 0.7);
    signaturePad5.clear();
}
function resizeCanvas6() {
    var w = modal6.clientWidth;
    var h = modal6.clientHeight;
    canvas6.width = Math.ceil(w * 0.75);
    canvas6.height = Math.ceil(h * 0.7);
    signaturePad6.clear();
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("resize", resizeCanvas2);
window.addEventListener("resize", resizeCanvas3);
window.addEventListener("resize", resizeCanvas4);
window.addEventListener("resize", resizeCanvas5);
window.addEventListener("resize", resizeCanvas6);

//PDF Generator
var page = document.title;
var doc = new jsPDF();

function pdf(quality = 1) {
    var name = document.querySelector('#orden_');
    const filename = page + name.value + '.pdf';
    let pdf = new jsPDF({
        orientation: 'p',       //portrait
        unit: 'mm',             //millimeters
        format: 'letter'        //document size
    });

    html2canvas(document.querySelector('.page'), { scale: quality }).then(canvas => {
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 216, 279);
        pdf.addPage();
      //  hoja2(pdf, quality);
      //  pdf.addPage();
        hoja2(pdf, filename, quality);
        /* pdf.save(filename); */
    });
}
hoja2 = (pdf, filename, quality) => {
    html2canvas(document.querySelector('#pag_2'), { scale: quality }).then(canvas => {
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 216, 279);
        pdf.addPage();
        html2canvas(document.querySelector('#pag_3'), { scale: quality }).then(canvas => {
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 216, 279);
            pdf.save(filename);
        });
      //  pdf.save(filename);
    });
}
/* hoja3 = (pdf, filename, quality) => {
    html2canvas(document.querySelector('#pag_3'), { scale: quality }).then(canvas => {
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 216, 279);
        pdf.save(filename);
    });
} */

function showMyImage(fileInput) {
    var files = fileInput.files;
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var imageType = /image.*/;
        if (!file.type.match(imageType)) {
            continue;
        }
        var container = fileInput.parentNode;
        container.file = file;
        var reader = new FileReader();
        reader.onload = (function (aImg) {
            return function (e) {
                container.style.backgroundImage = `url(${e.target.result})`;
            };
        })(container);
        reader.readAsDataURL(file);
    }
}