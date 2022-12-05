const Engineer = require('../lib/Engineer');

describe('Engineer Functionality', () => {
    const name = "Sky Linn"
    const id = "20"
    const email = "Sky@gmail.com"
    const github = "Sky12"

    const person = new Engineer(name,id,email,github);

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
    
    it('get github works', () => {
        expect(person.github).toBe(github);  
        expect(person.getGithub()).toBe(github);
      });

    it('get role works', () => {
        expect(person.getRole()).toBe("Engineer");
      });
  
  });