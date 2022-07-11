export interface IEnv {
    PORT: number;
}

export const GetEnvironment: () => IEnv = () => {
    if (process.env.ENVIRONMENT === "dev") {
        let env = require("./dev");
        return env;
    } else if (process.env.ENVIRONMENT === "production") {
        let env = require("./prod");
        return env;
    } else {
        return new Error('Shell variable ENVIRONMENT not set. Acceptable values are dev | production.');
    }
};
