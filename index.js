class Telephone {
    constructor() {
      this._phoneNumbers = new Set();
      this._observers = [];
    }
  
    addPhoneNumber(phoneNumber) {
      this._phoneNumbers.add(phoneNumber);
      this.notifyObservers(phoneNumber, 'add');
    }
  
    removePhoneNumber(phoneNumber) {
      this._phoneNumbers.delete(phoneNumber);
      this.notifyObservers(phoneNumber, 'remove');
    }
  
    dialPhoneNumber(phoneNumber) {
      if (this._phoneNumbers.has(phoneNumber)) {
        this.notifyObservers(phoneNumber, 'dial');
      } else {
        console.log('Phone number not found');
      }
    }
  
    addObserver(observer) {
      this._observers.push(observer);
    }
  
    removeObserver(observer) {
      this._observers = this._observers.filter(o => o !== observer);
    }
  
    notifyObservers(phoneNumber, action) {
      this._observers.forEach(observer => observer.notify(phoneNumber, action));
    }
  }
  
  class Observer {
    constructor(callback) {
      this._callback = callback;
    }
  
    notify(phoneNumber, action) {
      this._callback(phoneNumber, action);
    }
  }
  
  const printPhoneNumber = (phoneNumber, action) => {
    console.log(`Phone number: ${phoneNumber}`);
  };
  
  const printDialing = (phoneNumber, action) => {
    console.log(`Now Dialling ${phoneNumber}`);
  };
  
  const telephone = new Telephone();
  const printPhoneNumberObserver = new Observer(printPhoneNumber);
  const printDialingObserver = new Observer(printDialing);
  
  telephone.addObserver(printPhoneNumberObserver);
  telephone.addObserver(printDialingObserver);
  
  telephone.addPhoneNumber("2347023232");
  telephone.dialPhoneNumber("2347023232");
  telephone.removePhoneNumber("2347023232");
  telephone.dialPhoneNumber("2347023232");
