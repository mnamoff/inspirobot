const { App } = require("@slack/bolt");
const InspiroBotClient = require("./clients/inspiro");
const {
  createClientsMiddleware,
  createPreviewMiddleware,
  createCancelMiddleware,
  createAcceptMiddleware,
  createUserTokenMiddleware
} = require("./middleware");

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
  clientOptions: {
    slackApiUrl: process.env.SLACK_API_URL,
  },
});

app.use(createClientsMiddleware());
app.use(createUserTokenMiddleware());

app.command("/inspire", createPreviewMiddleware());

app.action("cancel_inspire", createCancelMiddleware());
app.action("replace_inspire", createPreviewMiddleware());
app.action("accept_inspire", createAcceptMiddleware());

module.exports = {
  start: async () => {
    app.start(process.env.PORT || 3000);
  },
};
