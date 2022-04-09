exports.handler = async (event, context) => {
  const guides = [
    { title: "Beat all Zelda Bosses Like a Boss", author: "mario" },
    { title: "Mario Kart Shortcuts You Never Knew Existed", author: "luigi" },
    { title: "Ultimate Street Fighter Guide", author: "chun-li" },
  ];
  const { user } = context.clientContext;

  if (user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ message: "you must be logged in to see this" }),
  };
};
