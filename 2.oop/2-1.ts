{
    type CoffeeCup={
        shots:number;
        hasMilk:boolean;
    }
    
    class CoffeMaker{
        private static Beans_Per_Shot:number=7;
        private coffeBeans=0;

        private constructor(coffeBeans:number){
            this.coffeBeans=coffeBeans
        }
        static makeMachine(coffeBeans:number):CoffeMaker{
            return new CoffeMaker(coffeBeans)
        }
        fillCoffeeBeans(beans:number){
            if(beans<0){
                throw new Error('invalid')
            }
            this.coffeBeans+=beans
        }
        // set SetCoffeeBeans(beans:number){
        //     if(beans<0){
        //         throw new Error('invalid')
        //     }
        //     this.coffeBeans+=beans 
        // }
        makeCoffee(shots:number):CoffeeCup{
            if(this.coffeBeans<shots*CoffeMaker.Beans_Per_Shot){
                throw new Error('not enough coffee beans')
            }
            this.coffeBeans-=shots*CoffeMaker.Beans_Per_Shot
            return {
                shots,
                hasMilk:false
            }
        }
    }
    const maker1= CoffeMaker.makeMachine(0)
    maker1.fillCoffeeBeans(7)
    maker1.makeCoffee(1)
}