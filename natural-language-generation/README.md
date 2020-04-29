# Natural Language Interface for Patients’ Electronic Health Records

To run code:
- open a terminal in VSCode
- use `npx rosaenlg-cli -l en_US -w <template_filepath>` 
- example file: `npx rosaenlg-cli -l en_US -w templates_highrisk/highriskpatients.pug` 


Gulp/CI:

- `gulp init` to create `dist` folder
- `gulp texts` to generate the texts in `dist`
- testing:
  - `mocha` to run the tests
  - use `npm run test` or `gulp test` to run the tests _and_ generate a nice report in `mochawesome-report` folder
  - `gulp nonreg` to generate the non regression reference test file
- optional: use `gulp package` to package templates for usage in a RosaeNLG server

