const users = [
    {id: 1, name: 'Sabbir', job: 'doctor', }]

// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'Sakiv', job: 'leader'},
        {id: 2, name: 'Santo', job: 'leader'},
    ]
}

const firstJob = data.data[0].job;
// console.log(firstJob);

const user = {
    id: 12,
    name: 'Sabbir Sarker',
    address: {
        street: {
            first: '3/58 jonota hougin',
            second: 'second floor',
            third: 'right side'
        },
        postOffice: 'Mirpur',
        city: 'Dhaka'
    }
}

const userFloor = user.address.street.third;
console.log(userFloor);