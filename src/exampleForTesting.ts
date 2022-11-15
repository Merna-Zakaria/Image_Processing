const myName = "your name";
const hello = (userName: string): string => `hello, ${userName}`;
console.log(hello(myName));

const myFunc = (num: number): number => {
    return num * num;
  };
  
  export default myFunc;