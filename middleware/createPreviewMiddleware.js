const { createPreviewResponse } = require("../utils")

const createPreviewMiddleware = () => async ({ ack, context, respond }) => {
  await ack();

  const { clients } = context;
  const imageUrl = await clients.inspiroBot.getUrl(); 
  const response = createPreviewResponse(imageUrl);
  
  return respond(response);
}

module.exports = createPreviewMiddleware;