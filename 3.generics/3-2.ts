{
    //constrain
    const obj1={
        name:'qqq',
        age:123,
        "3":333
    }
    const obj2={
        text:'hi',
        time:1231,
    }
    function getValue<O, K extends keyof O>(obj:O, key:K){
        return obj[key]
    }
    console.log(getValue(obj1,'name'))

    
    interface Lengthwise {
        length: number;
      }      
    function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
        console.log(arg.length); 
        return arg;
      }
      
}