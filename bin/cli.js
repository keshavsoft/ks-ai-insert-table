#!/usr/bin/env node

// import parseArgs from "./core/parseArgs/parseArgs.js";
import getLatestVersion from "./core/getLatestVersion.js";
import loadRunner from "./core/loadRunner.js";

const main = async () => {
    const args = process.argv.slice(2);
    // const args = parseArgs();
    // console.log("hhhhhhhh : ", args);

    const version = getLatestVersion();
    const runner = await loadRunner(version);

    await runner.default(process.cwd(), args[0])
};

main().catch((error) => {
    console.error(`\x1b[31mRuntime Error: ${error.message}\x1b[0m`);
    process.exit(1);
});