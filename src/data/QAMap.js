// Each potential answer is mapped to a particular question and vice versa

const QAMap = new Map([
  ['Do you need funding, or are you looking to donate?', ['Looking for funds', 'Looking to donate']],
  ['Looking to donate', 'Is tax-exemption important to you?'],
  ['Is tax-exemption important to you?', ['Yes', 'No', 'Not sure']],
  ['Yes', 'How much money are you trying to donate?'],
  ['No', 'How much money are you trying to donate?'],
  ['Not sure', 'How much money are you trying to donate?'],
  ['How much money are you trying to donate?', ['Less than $500', 'Between $500 and $10,000', '$10,000 or more']],

  ['Looking for funds', 'Grants or donations?'],
  ['Grants or donations?', ['Looking for grants', 'Looking for donations']],
  ['Looking for grants', 'What type of organization do you represent?'],
  ['What type of organization do you represent?', ['Non-profit', 'For-profit', 'Academic']],
  ['Looking for donations', 'How much?'],
  ['How much?', ['Less than $10,000', 'More than $100,000', 'Somewhere in between']],
  

  ['Non-profit', 'Where are you located?'],
  ['For-profit', 'Where are you located?'],
  ['Academic', 'Where are you located?'],
  ['Less than $10,000', 'Where are you located?'],
  ['More than $100,000', 'Where are you located?'],
  ['Somewhere in between', 'Where are you located?'],


  ['Less than $500', 'Where are you located?'],
  ['Between $500 and $10,000', 'Where are you located?'],
  ['$10,000 or more', 'Where are you located?'],

  ['Where are you located?', ['US', 'EU']]
]);

export default QAMap;