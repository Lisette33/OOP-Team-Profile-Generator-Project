const Manager = require('../lib/Manager');

describe('Manager Functionality', () => {
    const name = "Rose Glenn"
    const id = "10"
    const email = "Rose1@gmail.com"
    const officeNumber = "150"

    const person = new Manager(name,id,email,officeNumber);

    it('get name works', () => {
      expect(person.name).toBe(name);  
      expect(person.getName()).toBe(name);
    });

    it('get id works', () => {
        expect(person.id).toBe(id);  
        expect(person.getId()).toBe(id);
      });

    it('get email works', () => {
        expect(person.email).toBe(email);  
        expect(person.getEmail()).toBe(email);
      });

    it('get role works', () => {
        expect(person.getRole()).toBe("Manager");
      });
  
  });