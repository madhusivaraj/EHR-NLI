const gulpRosaeNLG = require('gulp-rosaenlg');
const fs = require('fs');

function doPackage(cb) {

  const packageObj = gulpRosaeNLG.packageTemplateJson({
    templateId: 'patients',
    entryTemplate: 'templates/patientForJson.pug',
    compileInfo: {
      language: 'fr_FR'
    },
    autotest: {
      activate: true,
      input: {
        language: 'fr_FR',
        patient: {
          "name": "OnePlus 5T",
          "colors": ["Black", "Red", "White"],
          "displaySize": 6,
          "screenRatio": 80.43,
          "battery": 3300
        }
      },
      expected: ['patient', 'battery']
    }
  });

  fs.writeFile('dist/patient_package.json', JSON.stringify(packageObj), 'utf8', () => {
    cb();
  });
}

exports.all = doPackage;
