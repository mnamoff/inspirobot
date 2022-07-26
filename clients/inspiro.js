const got = require("got");

class InspiroBotClient {
  constructor(url) {
    this.base = url;
  }

  async getUrl() {
    return got(new URL("/api?generate=true", this.base)).text();
  }
}

module.exports = InspiroBotClient;