var assert = require('assert');
const fs = require('fs');
const rosaenlgPug = require('rosaenlg');

describe('patients', function() {
  
  let referenceData = JSON.parse(fs.readFileSync('test/patientsNonreg.json', 'utf8'));
  const patients = JSON.parse(fs.readFileSync('data/data.json', 'utf8'));
  assert(referenceData.length = patients.length);

  for(let i=0; i< patients.length; i++) {
    let reference = referenceData[i];
    let rendered = rosaenlgPug.renderFile('templates/patientForJson.pug', {
      patient: patients[i],
      cache: true,
      language: 'en_US',
      forceRandomSeed: reference.seed,
    });
    it(`patient #${i}`, function() {
      assert.equal(reference.rendered, rendered, 'different from reference');
    });
  }
});
