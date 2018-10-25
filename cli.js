const { createHash } = require("crypto"),
    files = process.argv.slice(2);

async function checksum(str, algorithm, encoding) {
  return await createHash(algorithm || "blake2b512").update(str, 'utf8');
};

function pathIsValid(pathStr, typeStr) {
    pathStr = posix.normalize(posix.join(process.cwd(), "/", pathStr));
    if (!posix.isAbsolute(pathStr)) pathStr = mkPathAbs(pathStr);
    if (!existsSync(pathStr) || !lstatSync(pathStr).isFile()) return false;
    return true;   
};

function checksum(_path, algorithm, encoding) {
    return new Promise((resolve, reject) => {
        if (pathIsValid(_path)) {

        };
    });
};

function compareFiles(...files) {
    files.forEach(el => {
        console.log("this one is: ", el);
    });
};

compareFiles("this", "and", "that", "with", "Some", "of", "this");