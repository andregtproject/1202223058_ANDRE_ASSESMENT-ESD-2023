function generateUsernames(name) {
  const combinations = [];

  const mergedName = name.replace(/\s/g, '').toLowerCase();

  for (let i = 1; i <= mergedName.length; i++) {
    for (let j = 0; j <= mergedName.length - i; j++) {
      combinations.push(mergedName.substr(j, i));
    }
  }

  const validUsernames = combinations.filter(username => username.length <= 6);

  return validUsernames;
}

const fullName = "Naip Lovyu";
const usernames = generateUsernames(fullName);

console.log(usernames);
