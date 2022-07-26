const { App } = require("@slack/bolt");
const InspiroBotClient = require("./clients/inspiro");
const {
  createClientsMiddleware,
  createPreviewMiddleware,
  createCancelMiddleware,
  createAcceptMiddleware,
  createUserTokenMiddleware
} = require("./middleware");

/* App */
const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
  clientOptions: {
    slackApiUrl: process.env.SLACK_API_URL,
  },
});

/* Global middleware */
app.use(createClientsMiddleware());
app.use(createUserTokenMiddleware());

/* Commands */
app.command("/inspire", createPreviewMiddleware());

/* Actions */
app.action("cancel_inspire", createCancelMiddleware());
app.action("replace_inspire", createPreviewMiddleware());
app.action("accept_inspire", createAcceptMiddleware());

module.exports = {
  start: async () => {
    app.start(process.env.PORT || 3000);
  },
};
