{
  let age: number = 123;

  // optional parameter
  function namee(firstName: string, lasName?: string) {
    console.log(firstName, lasName);
  }

  // default parameter
  function message(msg: string = "default message") {
    console.log(msg);
  }

  //rest parameter
  function addNumbers(...num: number[]): number {
    return num.reduce((a, b) => a + b);
  }
}
