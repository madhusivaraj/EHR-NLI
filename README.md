# Natural Language Interface for Patients’ Electronic Health Records

Authors: Revanth Korrapolu and Madhumitha Sivaraj <br/>
Course: CS 533, Natural Language Processing (Graduate Course)  <br/>
Professor: [Dr. Karl Stratos](http://karlstratos.com/)  <br/>
Semester: Spring 2020 <br/>

Presentation slide deck can be found [here](https://github.com/madhusivaraj/EHR-NLI/blob/master/Final_Presentation_Deck.pdf). <br/>
Final Paper can be found [here](https://github.com/madhusivaraj/EHR-NLI/blob/master/Natural_Language_Interface_for_Patients__Electronic_Health_Records.pdf).

## Seq2SQL

### Setup
Requires a GPU to run.

Dataset require
- MIMIC-SQL  (public)
- MIMIC III (private due to HIPAA-compliance)

### Run


- ```Training:``` python TREQS/main.py 

- ```Validate:``` python TREQS/main.py --task validate

- ```Test:``` python TREQS/main.py --task test

## Natural Language Generation

For this portion of our project, we used [RosaeNLG](https://rosaenlg.org/rosaenlg/1.14.3/index.html), an open-source (MIT) Natural Language Generation (NLG) library written in JavaScript, based on the Pug template engine. 
RosaeNLG is the first open-source NLG library which is easy to use and complete enough to write real life NLG applications. It can be run both server side (node.js) and client side, in a browser.

### Setup
~~~~
cd /natural-language-generation/
npm install
~~~~

### Run
~~~~
npx rosaenlg-cli -l lang -w <template_filepath>
ex: npx rosaenlg-cli -l en_US -w templates_malesmokers/male_smokers_over45.pug
~~~~

## Patient Browser

Code for Patient Browser taken from: https://github.com/smart-on-fhir/patient-browser

### Setup
~~~~
cd /patient-browser-master/
npm install
~~~~

### Run
~~~~
cd /patient-browser-master/build
npm start 
~~~~
