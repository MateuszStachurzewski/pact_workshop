let publisher = require("@pact-foundation/pact-node");
let path = require("path");

let opts = {
    pactFilesOrDirs: [path.resolve(process.cwd(), "__tests__/pact/contracts")],
    pactBroker: "http://localhost:8080",
    consumerVersion: "1.0.0",
    providerVersion: "1.0.0",
    tags: "dev"
};

publisher.publishPacts(opts);