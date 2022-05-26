{
    //abstract
    type CoffeeCup={
        shots:number;
        hasMilk?:boolean;
        hasSugar?:boolean;
    }

    abstract class CoffeMaker {
        private coffeBeans=0;
        public constructor(coffeBeans:number){
            this.coffeBeans=coffeBeans
        }  
        protected abstract extrac(shots:number):CoffeeCup
        makeCoffee(shots:number):CoffeeCup{           
            return this.extrac(shots)
        }       
        
    }

    class MilkCoffeeMaker extends CoffeMaker{
        constructor(coffeBeans:number){
            super(coffeBeans)
        }
        protected extrac(shots: number):CoffeeCup {          
            return {
                shots,
                hasMilk:true
            }
        }
    }

    class SweetCoffeeMaker extends CoffeMaker{
        constructor(coffeBeans:number){
            super(coffeBeans)
        }
        protected extrac(shots: number):CoffeeCup {          
            return {
                shots,
                hasSugar:true
            }
        }
    }
    
    const milkCoffeeMkr=new MilkCoffeeMaker(20)
    const sweetCoffeeMkr=new SweetCoffeeMaker(20)
    console.log(milkCoffeeMkr.makeCoffee(1))
    console.log(sweetCoffeeMkr.makeCoffee(1))

}