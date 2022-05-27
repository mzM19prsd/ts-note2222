{
  class BeeKeeper {
    hasMask: boolean;
  }
  class ZooKeeper {
    nametag: string;
  }

  class Animal {
    numLegs: number;
  }
  class Bee extends Animal {
    keeper: BeeKeeper;
  }
  class Lion extends Animal {
    keeper: ZooKeeper;
  }

  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }

  const bee = createInstance(Bee);
  bee.keeper;
  bee.numLegs;
}
