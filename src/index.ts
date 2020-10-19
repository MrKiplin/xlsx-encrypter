export interface HelloWorldResult {
  result: string;
}

export const helloWorld = (): HelloWorldResult => {
  return {
    result: "Hello World",
  };
};

console.log(helloWorld());
