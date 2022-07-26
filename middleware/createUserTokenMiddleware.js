const createUserTokenMiddleware = () => async ({ context, next }) => {
  context.userToken = process.env.SLACK_USER_TOKEN;
  return next();
}

module.exports = createUserTokenMiddleware;