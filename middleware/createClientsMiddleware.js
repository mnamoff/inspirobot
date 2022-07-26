const InspiroBotClient = require("../clients/inspiro")

const createClientsMiddleware = () => async ({ context, next }) => {
  context.clients = {
    inspiroBot: new InspiroBotClient(process.env.INSPIRO_BOT_URL),
  };

  return next();
}

module.exports = createClientsMiddleware;