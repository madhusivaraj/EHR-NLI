const fs = require('fs');
const rosaenlgPug = require('rosaenlg');

function nonreg(cb) {
  const patients = JSON.parse(fs.readFileSync('data/data.json', 'utf8'));
  fs.open('test/patientsNonreg.json', 'w', (err, fd) => {
    fs.appendFileSync(fd, '[');
    for(let i=0; i< patients.length; i++) {
      let allParams = {
        patient: patients[i],
        cache: true,
        language: 'en_US',
      };
      rendered = rosaenlgPug.renderFile('templates/patientForJson.pug', allParams);
      fs.appendFileSync(fd, JSON.stringify({
        rendered: rendered,
        seed: allParams.util.randomSeed
      }) + ( i!=patients.length-1 ? ',':'' ));
    }
    fs.appendFileSync(fd, ']');
  });  
  cb();
}

exports.all = nonreg;
