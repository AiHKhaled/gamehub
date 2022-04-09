exports.handler = async () => {
  console.log("function ran");
  const data = { name: "a new player", age: 32, job: "a nerd" };

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
