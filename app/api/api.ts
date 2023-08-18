import { AuthenticateRequestParams, Authenticator, AuthenticatorRequestBody, AuthenticatorType, Authorize, IdpType } from "@/utils/models/authorize";
import { FeatureConfig } from "@/utils/util/featureConfig";

const apiDogQueryParams = (apiDogId: string): string => {
    const queryParams: Record<string, string> = {
        apidogApiId: apiDogId
    };

    return new URLSearchParams(queryParams).toString();
}

const getAuthParams = (authenticator: Authenticator, authParams: AuthenticateRequestParams)
    : AuthenticateRequestParams => {
    authParams.authenticator = authenticator.authenticator as AuthenticatorType;
    authParams.idp = authenticator.idp as IdpType;

    return authParams;
}

const getAuthBody = (
    authenticator: Authenticator,
    flowId: string | undefined, 
    nonce: string | undefined, 
    authParams: AuthenticateRequestParams
): AuthenticatorRequestBody => {

    let authReqBody: AuthenticatorRequestBody = {
        flowId: flowId ? flowId : '',
        nonce: nonce ? nonce : '',
        params: JSON.parse(JSON.stringify(getAuthParams(authenticator, authParams)))
    }

    return authReqBody;
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

export const authenticate = async (
    authenticator: Authenticator, 
    flowId: string | undefined, 
    nonce: string | undefined, 
    authParams: AuthenticateRequestParams
) : Promise<Authorize> => {

    const res: Response
        = await fetch(`${FeatureConfig.getBaseUrl()}/api/authenticate/v1` +
            `?${apiDogQueryParams(FeatureConfig.getAPIDogAuthId())}`,
            {
                method: 'POST',
                body: JSON.stringify(getAuthBody(authenticator, flowId, nonce, authParams)),
                headers: {
                    'content-type': 'application/json',
                },
            });

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}
