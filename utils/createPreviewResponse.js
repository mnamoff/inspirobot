const createPreviewResponse = (imageUrl) => ({
  blocks: [
    {
      type: "image",
      image_url: imageUrl,
      alt_text: "AI generated inspirational meme",
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Accept",
          },
          style: "primary",
          action_id: "accept_inspire",
          value: imageUrl,
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Try again",
          },
          action_id: "replace_inspire",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Cancel",
          },
          style: "danger",
          action_id: "cancel_inspire",
        },
      ],
    },
  ],
});

module.exports = createPreviewResponse;