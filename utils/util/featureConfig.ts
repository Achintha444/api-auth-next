import config from '../../config.json';

export class FeatureConfig {
  
    private constructor() {};

    public static getBaseUrl = (): string => config.BaseUrl;

    public static getAPIDogId = (): string => config.APIDogId;

    public static getAPIDogAuthId = (): string => config.APIDogAuthId;
}
