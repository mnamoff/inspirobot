const createCancelMiddleware = () => async ({ context, respond, ack }) => {
  await ack();

  await respond({
    delete_original: true,
  });
}

module.exports = createCancelMiddleware;