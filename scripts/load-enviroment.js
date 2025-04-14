js
const fs = require('fs');
const path = require('path');
const process = require('process');

async function main() {
    const enviromentPath = process.env.FOREST_ENVIRONMENT_PATH;

    if (!enviromentPath) {
        console.error("FOREST_ENVIRONMENT_PATH is not defined. Please create a .env.local file");
        process.exit(1);
    }

    console.log(`Loading enviroment from ${enviromentPath}`);

    // Example: Check if scene.obj exists
    const objPath = path.join(enviromentPath, 'scene.obj');
    if (!fs.existsSync(objPath)) {
        console.error(`scene.obj not found at ${objPath}`);
        process.exit(1);
    }

    console.log("Enviroment loaded succesfully.");
}

main();
