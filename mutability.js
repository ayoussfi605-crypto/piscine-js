clone1 = person;
clone2 = person;
Object.freeze(clone1)
Object.freeze(clone2)
samePerson = person;
person.age++
person.country = 'FR'