const fs = require('fs');
const rosaenlgPug = require('rosaenlg');

function html(cb) {
  const patients = JSON.parse(fs.readFileSync('data/data.json', 'utf8'));
  fs.open('dist/allpatients.html', 'w', (err, fd) => {
    fs.appendFileSync(fd, '<!DOCTYPE html><html lang="fr"><head><title>patients Descriptions</title><meta charset="utf-8"/></head><body>');
    for(let i=0; i< patients.length; i++) {
      let rendered = rosaenlgPug.renderFile('templates/patientForHTML.pug', {
        patient: patients[i],
        cache: true,
        language: 'en_US',
      });
      fs.appendFileSync(fd, rendered);
    }
    fs.appendFileSync(fd, '</body></html>');  
  });
  cb();
}

exports.all = html;
