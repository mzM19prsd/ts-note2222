{
    //index type

      type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
      };
    
      type AnimalName = Animal['name']; 
      const text: AnimalName = 'hello';
    
      type Gender = Animal['gender'];
    
      type Keys = keyof Animal; // 'name' | 'age' | 'gender'
      const key: Keys = 'gender';
    
      type Person = {
        name: string;
        gender: Animal['gender'];
      };
      const person: Person = {
        name: 'ellie',
        gender: 'male',
      };
}