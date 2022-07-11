import { ENV as DevConfig } from "./dev";
import { ENV as ProdConfig } from "./prod";

export interface IEnv {
    PORT: number;
}

export const GetEnvironment: () => IEnv = () => {
    let config: IEnv;

    if (process.env.ENVIRONMENT === "dev") {
        config = DevConfig;
    } else if (process.env.ENVIRONMENT === "production") {
        config = ProdConfig;
    } else {
        console.error('Shell variable ENVIRONMENT not set: acceptable values are dev | production.');
        process.exit(1);
    }

    return config;
};
