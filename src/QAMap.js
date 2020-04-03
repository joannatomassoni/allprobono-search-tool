// Each potential answer is mapped to a particular question and vice versa

const QAMap = new Map([
  ['Are you interested in donating, or do you need funding?', ['Looking for funds', 'Looking to donate']],
  ['Looking to donate', 'Is tax-exemption important to you?'],
  ['Is tax-exemption important to you?', ['Yes', 'No']],
  ['Looking for funds', 'Are you non-profit or for-profit?'],
  ['How much money are you trying to donate?', ['Less than $500', 'Between $500 and $10,000', '$10,000 or more']]
]);

export default QAMap;