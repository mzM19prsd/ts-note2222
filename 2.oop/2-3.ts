{
    //상속
    type CoffeeCup={
        shots:number;
        hasMilk:boolean;
    }
    interface CoffeMachine{
        fillCoffeeBeans(beans:number):void     
        makeCoffee(shots:number):CoffeeCup
    }

    class CoffeMaker implements CoffeMachine{
        private static Beans_Per_Shot:number=7;
        private coffeBeans=0;

        public constructor(coffeBeans:number){
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

    class MilkCoffeeMaker extends CoffeMaker{
        makeCoffee(shots: number):CoffeeCup {
            const coffee=super.makeCoffee(shots)
            return{
                ...coffee,
                hasMilk:true
            }
        }
    }
    const coffee=new CoffeMaker(30)
    console.log(coffee.makeCoffee(1))
    const MilkCoffee=new MilkCoffeeMaker(30)
    console.log(MilkCoffee.makeCoffee(1))
}