export interface Authorize {
    flowId: string,
    nonce: string,
    currentStep : {
        authenticators: Authenticator[],
    },
    code: string,
    state: string,
    scope: string
}

export interface Authenticator {
    authenticator: string,
    idp: string,
    metadata: any
}

export interface AuthenticatorInterface {
    flowId?: string,
    nonce?: string,
    authenticator: Authenticator,
    checkLoggedIn: (authorize: Authorize) => void,
}

export interface AuthenticatorRequestBody {
    flowId: string,
    nonce: string,
    authenticator?: AuthenticatorType,
    idp?: IdpType,
    params?: AuthenticateRequestParams
}

export interface AuthenticateRequestParams {
    username?: string,
    password?: string,
    authenticator?: AuthenticatorType,
    idp?: IdpType,
    code?: string,
    state?: string,
    otp?: string,
    tokenResponse?: string,
}

export enum AuthenticatorType {
    BASIC_AUTH = "BasicAuthenticator",
    FIDO = "FIDOAuthenticator",
    OPENID = "OpenIDConnectAuthenticator",
    GOOGLE_OPENID = "GoogleOIDCAuthenticator",
    TOTP = "totp"
}

export enum IdpType {
    GOOGLE = "google",
    LOCAL = "LOCAL"
}
