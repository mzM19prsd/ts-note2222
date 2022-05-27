{
    function nullCheck<T>(arg:T|null):T{
        if(arg===null){
            throw new Error('null')
        }
        return arg
    }
    //
    const num2=nullCheck<number>(123)
    const num1=nullCheck(123)

    function identity<Type>(arg: Type): Type {
        // console.log(arg.length); 
        return arg;
      }
    
    function Identity2<Type>(arg: Type[]): Type[] {
        console.log(arg.length); 
        return arg;
      }
       
     

}