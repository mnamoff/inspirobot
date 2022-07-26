(async () => {
  await require("./app").start();
  console.log(`🚀 Inspiro Slack App running on port ${process.env.PORT}`);
})();