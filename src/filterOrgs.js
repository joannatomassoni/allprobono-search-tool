const filterOrgs = (question, answer, orgs) => {
  return orgs.filter((org) => {
    if (org.metadata[question]) {
      return org.metadata[question].includes(answer)
    }
  })
}

module.exports = filterOrgs;

