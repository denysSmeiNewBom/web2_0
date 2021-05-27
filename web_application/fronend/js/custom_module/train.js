const {SoldTickets} = require("./soldTickets");
let last_train_id = 0;
let train_list = new Array();


class Train{
    constructor (route, id) {
    
        this.id = id;
        this.route = route;
        this.soldTickets = new SoldTickets();
        
        if (id === "" ||
            typeof id      === 'undefined') { this.id      = ++last_train_id; }
        if (route === "" ||
            typeof route === 'undefined') { this.route = "Не встановлено";   }
   
    }
}

// ...............................................................................................

// Додавання нової лікарні
function add_train (route, id) {

    let train = new Train(id, route);
    train_list.push(train);

    return train;

}

// Видалення лікарні з колекції
function remove_train (id) {

    for (let z = 0; z < train_list.length; z++) {

        let train = train_list[z];
        if (train.id === id) { train_list.splice(z, 1);
                                  return 1; }

    }

    return -1;

}

// ...............................................................................................

// Повертаємо список усіх лікарень
function get_trains_list()
    { return train_list; }

// Задаємо список усіх лікарень
function set_train_list (data) {

    if (!data || data.length < 1) { return; }

    for (let element of data) {
        add_train(  element.id,
                    element.route);
    }
}

// Повертає лікарню по її id
function get_train_by_id (id) {

    for (let z = 0; z < train_list.length; z++) {

        let train = train_list[z];
        if (train.id === id) { return train; }

    }

    return -1;

}

// ...............................................................................................

// Редагувати лікарню в колекції
function edit_train (id, new_route) {

    for (let z = 0; z < train_list.length; z++) {

        let train = trains_list[z];

        if (train.id === id) {  train.route = new_route;
                                  return 1; }

    }

    return -1;

}

// ...............................................................................................

// Знайти лікарню в колекції
function find_train (search) {

    let result = [];
    search = search.toLowerCase();

    for (let train of train_list) {

        let attributes = [ train.route];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) { result.push(train);
                                                       break;
            }
        }
    }

    return result;

}

// ...............................................................................................

// Вивести в консоль список лікарень
function print_train_list() {

    console.log("\n" + "Список усіх потягів:");

    for (let z = 0; z < train_list.length; z++) {

        let train = train_list[z];
        console.log("\t" + "Номер: "            + train.address);
        console.log("\t" + "ID: "               + train.id);

    }
}