
class Telephone {

    constructor() {
        if(Telephone.instance) {
            return Telephone.instance;
        } else {
            this.contacts = new Set();
            this.observers = [];
            Telephone.instance = this;
        }
    }

    addPhoneNumber(phoneNumber) {
        if(this.contactExist(phoneNumber)) {
            console.log("Contact already exist");
        }else {
            this.contacts.add(phoneNumber);
        }
    }

    removePhoneNumber(phoneNumber) {
        if(this.contactExist(phoneNumber)) {
            this.contacts.delete(phoneNumber);
        }else {
            console.log("Contact doesn't exist");
        }
    }

    dialPhoneNumber(phoneNumber) {
        if(this.contactExist(phoneNumber)) {
            this.notifyObserver(phoneNumber);
        }else {
            console.log("Contact doesn't exist");
        }
    }

    addObserver(observer) {
        if(this.observerExist(observer)) {
            console.log("Observer already exist");
        }else {
            this.observers.add(observer);
        }
    }

    removeObserver(observer) {
        if(this.observerExist(observer)) {
            this.observers.delete(observer);
        }else {
            console.log("Observer doesn't exist");
        }
    }

    notifyObserver(phoneNumber) {
        this.observers.forEach(observer => {
            observer.update(phoneNumber);
            console.log("");
        });
    }

    contactExist(phoneNumber) {
        return this.contacts.has(phoneNumber);
    }

    observerExist(observer) {
        return this.observers.has(observer);
    }

}


class Observer1 {
    update(phoneNumber) {
        console.log(Contact Details: Name: ${phoneNumber.fullName}\n\t\tNumber: ${phoneNumber.number})
    }
}


class Observer2 {
    update(phoneNumber) {
        console.log(currently dialing......${phoneNumber.number});
    }
}


const PhoneNumber = (firstName, lastName, number) => ({
    fullName: ${firstName} ${lastName},
    number
});

console.log("\nCreating contacts for ransom, dave and gift:");
const ada = PhoneNumber("Ransom", "Eze", "+2347040060087");
const jessie = PhoneNumber("Dave", "Eke", "+2348076543210");
const nzube = PhoneNumber("Gift", "Okoro", "+2348076543210");
console.log(ransom);
console.log(dave);
console.log(gift);


console.log("\nCreating two Telephone objects and adding contacts and observers to just one but they both return the same thing.\n");
const telephone1 = new Telephone();
const telephone2 = new Telephone();

const observer1 = new Observer1();
const observer2 = new Observer2();

telephone1.addPhoneNumber(ransom);
telephone1.addPhoneNumber(dave);
telephone1.addPhoneNumber(gift);

telephone1.addObserver(observer1);
telephone1.addObserver(observer2);

console.log("Telephone1:");
console.log(telephone1);
console.log("\nTelephone2:");
console.log(telephone2);

console.log("\nCalling dave:");
telephone1.dialPhoneNumber(dave);

console.log("Calling gift:");
telephone1.dialPhoneNumber(gift);

console.log("\nDeleting ransom contact:");
telephone1.removePhoneNumber(ransom);
console.log(telephone1);

/* Expaination
The constructor ensures that only one instance of Telephone can exist. It initializes the contacts and observers arrays.
addPhoneNumber, removePhoneNumber, and dialPhoneNumber methods are used to manage phone numbers in the contact list.
The addObserver and removeObserver methods handle adding and removing observers who are interested in phone call events.
The notifyObserver method notifies all observers when a phone call is made.
There are two observer classes, Observer1 and Observer2, each with an update method to react to phone call events.
The PhoneNumber function creates phone number objects with first name, last name, and number.
The code then creates three phone number objects and two Telephone instances.
It adds contacts and observers to one Telephone instance and demonstrates how both instances behave the same way.
Finally, it makes phone calls, deletes a contact, and logs the phone call events.*/
