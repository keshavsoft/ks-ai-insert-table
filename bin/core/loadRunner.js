export default async function loadRunner(version) {
    const mod = await import(`../${version}/index.js`);

    if (typeof mod.default !== "function") {
        throw new Error(`Invalid start.js in ${version}`);
    }

    return mod.default;
};