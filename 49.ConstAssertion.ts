// Const Assertions

const king = 'King Arthur' 
king = 'Arthur, King of the Britons'; // error
const upperCaseKing = king.toUpperCase(); // KING ARTHUR

const dave = {
    name : 'Dave',
    role: 'drummer',
    skills: ['drums']
}
dave ={
    name: 'David',
    role: 'guitarist',
    skills: ['guitar']
} // error

dave.name = 'David';  // OK
dave.role = 'guitarist';  // OK
dave.skills = ['guitar'];  // OK

const jane = {
    name: 'Jane',
    role: 'singer',
    skills: ['vocals']
} as const;

jane.name = 'Janet'; // error
jane.role = 'lead singer'; // error
jane.skills = ['dance']; // error


function layout(settings:{
    align: 'left' | 'right' | 'center'
    padding: number
}){
    console.log('Performing layout with settings: ' + JSON.stringify(settings));
}

const example = {
    align: 'left',
    padding: 1
}

const example2 = {
    align: 'left' as const,
    padding: 1
}

layout(example); // ERROR
layout(example2); // OK