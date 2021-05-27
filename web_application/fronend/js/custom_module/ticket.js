// Необхідні змінні
let last_ticket_id = 0;
let tickets_list = new Array();

// Клас - лікар
class Ticket {

    constructor (train, passenger, id) {
    
        this.id = id;
        this.passenger = passenger;
        this.train = train;

        
        if (id === "" ||
            typeof id       === 'undefined') { this.id       = ++last_ticket_id;  }
        if (passenger === "" ||
            typeof passenger      === 'undefined') { this.passenger      = "Не встановлено";  }
        if (train === "" ||
            typeof train     === 'undefined') { this.train     = "Невідомий лікар"; }
        
    }
}

// ...............................................................................................

// Додавання нового лікаря
function add_ticket (train, passenger, id) {

    let ticket = new Ticket(train, passenger, id);
    tickets_list.push(ticket);

    return ticket;

}

// Видалити лікаря з колекції
function remove_ticket (id) {

    for (let z = 0; z < tickets_list.length; z++) {

        let ticket = tickets_list[z];
        if (ticket.id === id) { tickets_list.splice(z, 1);
                                return 1; }

    }

    return -1;

}

// ...............................................................................................

// Повертаємо список усіх лікарів
function get_tickets_list()
    { return tickets_list; }

// Задаємо список усіх лікарів
function set_tickets_list (data) {

    if (!data || data.length < 1) { return; }

    for (let element of data) {
        add_ticket(element.train,
                   element.passenger,
                   element.id);
    }
}

// Повертає лікаря по його id
function get_ticket_by_id (id) {

    for (let z = 0; z < tickets_list.length; z++) {

        let ticket = tickets_list[z];
        if (ticket.id === id) { return ticket; }

    }

    return -1;

}

// ...............................................................................................

// Редагувати лікаря в колекції
function edit_ticket (id, new_train, new_passenger) {

    for (let z = 0; z < tickets_list.length; z++) {

        let ticket = tickets_list[z];

        if (ticket.id === id) { ticket.passenger = new_passenger;
                                ticket.train = new_train;
                                return 1; }

    }

    return -1;

}

// ...............................................................................................

// Знайти лікаря в колекції
function find_tickets (search) {

    let result = [];
    search = search.toLowerCase();

    for (let ticket of tickets_list) {

        let attributes = [ ticket.train,
                           ticket.passenger];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) { result.push(ticket);
                                                       break;
            }
        }
    }

    return result;

}

// ...............................................................................................

// Вивести в консоль список лікарів
function print_tickets_list() {

    console.log("\n" + "Список усіх лікарів:");

    for (let z = 0; z < tickets_list.length; z++) {

        let ticket = tickets_list[z];
        console.log("\t" + "Потяг: " + ticket.train);
        console.log("\t" + "Пасажир: "    + ticket.passenger);
        console.log("\t" + "ID: "            + ticket.id);

    }
}