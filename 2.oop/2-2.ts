{
    //인터페이스
    type CoffeeCup={
        shots:number;
        hasMilk:boolean;
    }
    interface CoffeMachine_A{
        fillCoffeeBeans(beans:number):void     
    }
    interface CoffeMachine_B{
        makeCoffee(shots:number):CoffeeCup
        fillCoffeeBeans(beans:number):void
    }
    
    class CoffeMaker implements CoffeMachine_A, CoffeMachine_B{
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


    const maker1:CoffeMachine_A= CoffeMaker.makeMachine(0)
    maker1.fillCoffeeBeans(7); 
    // maker1.makeCoffee(1);

    const maker2:CoffeMachine_B=CoffeMaker.makeMachine(0)
    maker2.fillCoffeeBeans(7)
    maker2.makeCoffee(1)

}