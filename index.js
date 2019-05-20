class AddressBook {
    constructor() {

        this.contacts = [new Contact("Jonah", "blahblah@gmail.com", "12345678", "Annoyance")]

    }


    add(info) {

        const addContact = new Contact(info.name, info.email, info.phone, info.relation);
        this.contacts.push(addContact);

    }

    deleteAt(deleteAt) {
        this.address.splice(deleteAt, 0);
        console.log(address);


    }

    print() {
        console.log(address);
    }


}


class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }


}

const address = new AddressBook();

const contact = new Contact();






function entry() {



    let questionPrompt = prompt("add, delete, print, or quit");

    if (questionPrompt === "add") {
        const info = {
            name: prompt("name?"),
            email: prompt("email?"),
            phone: prompt("phone?"),
            relation: prompt("relation?"),
        }

        address.add(info);

    } else if (questionPrompt === "print") {
        address.print();
    } else if (questionPrompt === "delete") {

        let deletePrompt = prompt("index to delete?");
        contacts.deleteAt(deletePrompt, 1);
    } else if (questionPrompt === "quit") {
        console.log("farewell");

    }
}



entry();