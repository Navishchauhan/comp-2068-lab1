/*
  Full Name: Navish Chauhan 	
  Student ID: 200395830

  Instructions:
    Follow the steps below. If you have any questions
    please feel free to use Slack to communicate. You
    are allowed to discuss the lab with other students
    but you ARE NOT permitted to copy/paste or share
    code.
  
  Rubric:
    Steps: 11.5 points
    Code Format: 10 points
    Github Link: 10 points

  NOTE: The code format and Github link marks are
    only awarded if the steps have been completed.
    (Code formatting is the visual structure of
      you code. I expect that you have used proper
      tabbing of nested structures so code readability
      is adequate.)
*/

console.clear();

/*
  Step 1 (2.5 points):
    Create an array that contains 4 people objects.
    Each object must have at least 2 properties.
*/

 const perObj = [{ 
    names: ["Kyle", "Adam", "Anders", "Blake"],
	ages: [22, 23, 26, 23], 
	hobbies: ["playing soccer", "playing hockey", "cooking", "gardening"],
	programs: ["business", "fitness & health", "business", "nursing"] 
}]; 

console.log(perObj);
/*
  Step 2 (6 points):
    Create an arrow function that accepts
    a destructured object as an argument. In the
    body of your function, console.log a string
    template utilizing the properties you
    destructured.
*/

//Destructuring 
const perNames = ["Kyle", "Adam", "Anders", "Blake"];
const [person1, person2, person3, person4] = perNames;
console.log(person1, person2, person3, person4);

const perAges = [22, 23, 26, 23];
const [age1, age2, age3, age4] = perAges;
console.log(age1, age2, age3, age4);

const perHobbies = ["playing soccer", "playing hockey", "cooking", "gardening"];
const [hobby1, hobby2, hobby3, hobby4] = perHobbies;
console.log(hobby1, hobby2, hobby3, hobby4);

const perPrograms = ["business", "fitness & health", "business", "nursing"];
const [program1, program2, program3, program4] = perPrograms ;
console.log(program1, program2, program3, program4);

//creating the arrow functions
const firstPerson = () => {
	console.log(`${person1}'s age is ${age1}. ${person1}'s hobby is ${hobby1} and ${person1} is studying ${program1}.`);
};
firstPerson();

const secondPerson = () => {
	console.log(`${person2}'s age is ${age2}. ${person2}'s hobby is ${hobby2} and ${person2} is studying ${program2}.`);
};
secondPerson();

const thirdPerson = () => {
	console.log(`${person3}'s age is ${age3}. ${person3}'s hobby is ${hobby3} and ${person3} is studying ${program3}.`);
};
thirdPerson();

const fourthPerson = () => {
	console.log(`${person4}'s age is ${age4}. ${person4}'s hobby is ${hobby4} and ${person4} is studying ${program4}.`);
};
fourthPerson();

/*
  Step 3 (3 points):
    Loop over your array using a for/of loop.
    Call your arrow function passing the array item
    as an argument.
*/

//looping the array using for/of loop
for (let loop1 of perObj) {
	console.log(loop1);
}

