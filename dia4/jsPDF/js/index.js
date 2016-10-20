$(document).ready(function(){
  var imgData = 'data:image/jpeg;base64,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';

  var doc = new jsPDF();

  doc.setFontSize(40);            // Tamaño del texto (40px)
  doc.text(75, 25, 'Nyan Cat');    // Posición X,Y = (75,25)
  doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);    // Pos X,Y Tamaño W,H
  doc.setFontSize(14);            // Tamaño del texto (14px)
  doc.text(85, 215, 'Generado con jsPDF');
  doc.save('sample.pdf');
});
