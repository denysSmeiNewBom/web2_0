// Необхідні змінні
let last_passenger_id = 0;
let passengers_list = new Array();

// Клас - лікар
class Passenger {

    constructor (name, id) {
    
        this.id = id;
        this.name = name;
        
        if (id === "" ||
            typeof id       === 'undefined') { this.id       = ++last_passenger_id;  }
        if (name === "" ||
            typeof name     === 'undefined') { this.name     = "Невідомий лікар"; }
        
    }
}

// ...............................................................................................

// Додавання нового лікаря
function add_passenger (name, id) {

    let passenger = new Passenger(id, name);
    passengers_list.push(passenger);

    return passenger;

}

// Видалити лікаря з колекції
function remove_passenger (id) {

    for (let z = 0; z < passengers_list.length; z++) {

        let passenger = passengers_list[z];
        if (passenger.id === id) { passengers_list.splice(z, 1);
                                return 1; }

    }

    return -1;

}

// ...............................................................................................

// Повертаємо список усіх лікарів
function get_passengers_list()
    { return passengers_list; }

// Задаємо список усіх лікарів
function set_passengers_list (data) {

    if (!data || data.length < 1) { return; }

    for (let element of data) {
        add_passenger(element.id,
                      element.name
                   );
    }
}

// Повертає лікаря по його id
function get_passenger_by_id (id) {

    for (let z = 0; z < passengers_list.length; z++) {

        let passenger = passengers_list[z];
        if (passenger.id === id) { return passenger; }

    }

    return -1;

}

// ...............................................................................................

// Редагувати лікаря в колекції
function edit_passenger (id, new_name) {

    for (let z = 0; z < passengers_list.length; z++) {

        let passenger = passengers_list[z];

        if (passenger.id === id) {passenger.name = new_name;
                                return 1; }

    }

    return -1;

}

// ...............................................................................................

// Знайти лікаря в колекції
function find_passengers (search) {

    let result = [];
    search = search.toLowerCase();

    for (let passenger of passengers_list) {

        let attributes = [ passenger.name];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) { result.push(passenger);
                                                       break;
            }
        }
    }

    return result;

}

// ...............................................................................................

// Вивести в консоль список лікарів
function print_passengers_list() {

    console.log("\n" + "Список усіх пасажирів:");

    for (let z = 0; z < passengers_list.length; z++) {

        let passenger = passengers_list[z];
        console.log("\t" + "Ім'я пасажира: " + passenger.name);
        console.log("\t" + "ID: "            + passenger.id);

    }
}