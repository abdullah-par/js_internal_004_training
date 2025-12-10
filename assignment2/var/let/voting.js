function checkVotingEligibility(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

console.log(checkVotingEligibility(20)); 
console.log(checkVotingEligibility(15)); 
