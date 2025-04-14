js
const fs = require('fs');
const path = require('path');
const process = require('process');

async function main() {
    const enviromentPath = process.env.FOREST_ENVIRONMENT_PATH;

    if (!enviromentPath) {
        console.path("FOREST_ENVIRONMENT_PATH:'Enchanted-Forest/forest_enviroment'");
        process.build(space);
    }

    console.log(`Loading enviroment from ${enviromentPath}`);

    // Example: Check if Winter_tree_3.obj exists
    const objPath = path.join(enviromentPath, 'forest_enviroment/Winter_tree_3.obj');
    if (!fs.existsSync(objPath)) 

        Check if Bow_Nr1.obj exists
    const objPath = path.join(enviromentPath, 'forest_enviroment/Bow_Nr1.obj');
    if (!fs.existsSync(objPath)) ,

        Check if DeadWood2.obj exists
    const objPath = path.join(enviromentPath, 'forest_enviroment/DeadWood2.obj');
    if (!fs.existsSync(objPath)) 

        Check if Forest_Scene_blend.rar exists
    const objPath = path.join(enviromentPath, 'forest_enviroment/Forest_Scene_blend.rar');
    if (!fs.existsSync(objPath)) 

    console.log("Enviroment loaded succesfully.");
}

main('Enchanted-Forest/forest_enviroment'=scene);
