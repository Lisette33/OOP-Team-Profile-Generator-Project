const Employee = require('../lib/Employee');

describe('Employee Functionality', () => {
    const name = "Benjamin Zest"
    const id = "1"
    const email = "Benjamin@gmail.com"
    const person = new Employee(name,id,email);

    it('get name works', () => {
      expect(person.name).toBe(name);  
      expect(person.getName()).toBe(name);
    });

    it('get id works', () => {
        expect(person.id).toBe(id);  
        expect(person.getId()).toBe(id);
      });

    it('get name works', () => {
        expect(person.email).toBe(email);  
        expect(person.getEmail()).toBe(email);
      });
    
    it('get role works', () => {
        expect(person.getRole()).toBe("Employee");
      });
  
  });