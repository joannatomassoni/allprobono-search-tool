// Each potential answer is mapped to a particular question and vice versa

const QAMap = new Map([
  ['Do you need funding, or are you looking to donate?', ['Looking for funds', 'Looking to donate']],
  ['Looking to donate', 'Is tax-exemption important to you?'],
  ['Is tax-exemption important to you?', ['Yes', 'No']],
  ['Yes', 'How much money are you trying to donate?'],
  ['No', 'How much money are you trying to donate?'],
  ['How much money are you trying to donate?', ['Less than $500', 'Between $500 and $10,000', '$10,000 or more']],
  ['Looking for funds', 'Are you non-profit or for-profit?'],
  ['Less than $500', []],
  ['Between $500 and $10,000', []],
  ['$10,000 or more', []],
  ['Are you non-profit or for-profit?', ['Non-profit', 'For-profit']],
  ['Non-profit', 'Are you looking for grants or donations?'],
  ['For-profit', 'Are you looking for grants or donations?'],
  ['Are you looking for grants or donations?', ['Grants', 'Donations']],
]);

export default QAMap;