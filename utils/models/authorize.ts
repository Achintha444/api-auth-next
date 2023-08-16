export interface Authorize {
    currentStep : {
        authenticators: Authenticator[],
    }
}

export interface Authenticator {
    authenticator: string,
    idp: string,
    metadata: any
}

export interface AuthenticatorInterface {
    authenticator: Authenticator
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
