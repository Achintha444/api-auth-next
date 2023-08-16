export interface Authorize {
    currentStep : {
        authenticators: Authenticator[],
    }
}

export interface Authenticator {
    authenticator: String,
    idp: String,
    metadata: any
}

export interface AuthenticatorInterface {
    authenticator: Authenticator,
}
