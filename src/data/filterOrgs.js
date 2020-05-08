/**
 * 
 * @param {*} question 
 * @param {*} answer 
 * @param {*} orgs 
 * 
 * Filters the organizations from the main data source in orgData.js to include relevant organizations every time a user makes a choice.
 */

const filterOrgs = (question, answer, orgs) => {
  return orgs.filter((org) => {
    if (org.metadata[question]) {
      return org.metadata[question].includes(answer)
    }
  })
}

module.exports = filterOrgs;

