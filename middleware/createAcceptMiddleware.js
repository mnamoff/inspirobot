const createAcceptMiddleware =
  () =>
  async ({ client, respond, ack, payload, body, context }) => {
    await ack();

    const { value: imageUrl } = payload;

    // TODO: There must be a better way to replace the ephemeral message
    await respond({
      delete_original: true,
      replace_original: true,
      text: "",
    });

    await client.chat.postMessage({
      token: context.userToken,
      channel: body.channel.id,
      blocks: [
        {
          type: "image",
          image_url: imageUrl,
          alt_text: "AI generated inspirational meme",
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: "*:bulb: Posted via InspiroBot!* (/inspire)",
            },
          ],
        },
      ],
    });
  };

module.exports = createAcceptMiddleware;