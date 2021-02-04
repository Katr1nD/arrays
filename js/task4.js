const auditories = [{
        name: 302,
        places: 10,
        faculty: 'Gryffindor',
    },
    {
        name: 404,
        places: 15,
        faculty: 'Ravenclaw',
    },
    {
        name: 418,
        places: 10,
        faculty: 'Hufflepuff',
    },
    {
        name: 505,
        places: 10,
        faculty: 'Slytherin',
    },
    {
        name: 303,
        places: 20,
        faculty: 'Gryffindor',
    },
    {
        name: 401,
        places: 20,
        faculty: 'Ravenclaw',
    },
    {
        name: 200,
        places: 15,
        faculty: 'Hufflepuff',
    },
    {
        name: 403,
        places: 20,
        faculty: 'Slytherin',
    },
]

const group = {
    name: "First course",
    quantity: 12,
    faculty: 'Ravenclaw',
}

function getAllAuditories() {
    return auditories.map(auditory => `Room number №${auditory.name} faculty ${auditory.faculty} has ${auditory.places} places.`);
}

function findAuditoryByFaculty(rooms = auditories, team = group) {
    return rooms.filter((room) => room.faculty === team.faculty);
}

function findAuditoryByPlaces(rooms = auditories, team = group) {
    return rooms.filter((room) => room.places > team.quantity);
}

function findAuditoryForGroup(rooms = auditories, team = group) {
    return findAuditoryByPlaces(findAuditoryByFaculty(rooms, team), team);
}

function sortNumber() {
    return auditory.sort((a, b) => a.name - b.name);
}

function sortFaculty() {
    return auditory.sort(function (a, b) {
        if (a.faculty.toLocaleUpperCase() < b.faculty.toUpperCase()) {
            return -1;
        } else if (a.faculty.toUpperCase() > b.faculty.toUpperCase()) {
            return 1;
        }
        return 0;
    });
}