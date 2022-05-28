const bob = {
    name:'Bob',
    age:22,
}
const anna = {
    name:'Anna',
    age:20,
    job:{
        title:'Software Engineer',
    },
}
// Good code
function displayJobTitle(person){
    const title = person.job?.title ?? 'No job yet';
    console.log(person.name, title);
}
displayJobTitle(bob);
displayJobTitle(anna);