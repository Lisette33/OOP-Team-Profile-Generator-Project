const Intern = require('../lib/Intern');

describe('Intern Functionality', () => {
    const name = "Flore Hall "
    const id = "30"
    const email = "BJay@gmail.com"
    const school = "College"

    const person = new Intern(name,id,email,school);

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
    
    it('get school works', () => {
        expect(person.school).toBe(school);  
        expect(person.getSchool()).toBe(school);
      });

    it('get role works', () => {
        expect(person.getRole()).toBe("Intern");
      });
  
  });