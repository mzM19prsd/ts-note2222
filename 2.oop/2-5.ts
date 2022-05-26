{
    //
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };
  interface SugarMachine {
    addSugar(): true;
  }
  interface MilkMachine {
    addMilk(): true;
  }
  class CoffeMaker   {
    private coffeBeans = 0;

    constructor(
      coffeBeans: number,
      private sugar: SugarMachine | false,
      private milk: MilkMachine | false
    ) {
      this.coffeBeans = coffeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: this.sugar ? this.sugar.addSugar() : false,
        hasMilk: this.milk ? this.milk.addMilk() : false,
      };
    }
  }
  class SugarMaker implements SugarMachine {
    addSugar(): true {
      return true;
    }
  }
  class MilkMaker implements MilkMachine {
    addMilk():true {
      return true;
    }
  }
  
  
  const sugar=new SugarMaker()
  const milk=new MilkMaker()

  const coffee=new CoffeMaker(30,false,false)
  const sweetCoffee=new CoffeMaker(30,sugar,false)
  const milkCoffee=new CoffeMaker(30,false,milk)
  console.log(coffee.makeCoffee(1))
  console.log(sweetCoffee.makeCoffee(1))
  console.log(milkCoffee.makeCoffee(1))
  
  
}
