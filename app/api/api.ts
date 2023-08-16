import { Authorize } from "@/utils/models/authorize";
import { FeatureConfig } from "@/utils/util/featureConfig";

const apiDogQueryParams = (apiDogId: string): string => {
    const queryParams: Record<string, string> = {
        apidogApiId: apiDogId
    };

    return new URLSearchParams(queryParams).toString();
}

export const authorize = async (): Promise<Authorize> => {

    const res: Response
        = await fetch(`${FeatureConfig.getBaseUrl()}/oauth2/authorize` +
            `?${apiDogQueryParams(FeatureConfig.getAPIDogId())}`,
            {
                method: 'POST',
            });

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}
