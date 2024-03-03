const { str, port, cleanEnv } = require("envalid");


module.exports =  cleanEnv(process.env, {
    DATABASE: str(),
    PORT: port(),
});
