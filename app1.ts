// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "Polina",
//     age: 30,
//     hobbies: ['Spots', 'Cooking'],
//     role: [2, 'author']
// };


//ENUM =>

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR};

const person = {
    name: "Polina",
    age: 30,
    hobbies: ['Spots', 'Cooking'],
    role: Role.ADMIN
};

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}


if(person.role === Role.ADMIN) {
    console.log('is admin');
}