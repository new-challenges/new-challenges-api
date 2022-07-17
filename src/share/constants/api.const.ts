export const CONTROLLER_CONSTANTS = {
    APP: { NAME: 'app', API_TAG: 'Application' },
    LEVEL: {
        NAME: 'level', API_TAG: 'Level', METHODS: {

        }
    },
    AUTH: {
        NAME: 'auth', API_TAG: 'Authentication', METHODS: {
            CONFIRM_OPT: 'confirm-otp',
            CREATE_CUSTOMER: 'mobile/create-customer',
            CREATE_ADMIN: 'create-admin',
            CUSTOMER_SIGNIN: 'mobile/signin',
            Admin_SIGNIN: 'signin',
            SIGNUP: 'signup',
        }
    },
    USER: { NAME: 'user', API_TAG: 'User', METHODS: {
        UPDATE_PROFILE: 'update-profile'
    } },
}

export const METHODS_CONTSTANSTS = {
    GET_BY_ID: ':id',
    PAGING: 'paging',
    DELETE: ':id',
    UPDATE_STATUS: 'update-status'
}

export const OPT_STATUS_CONSTANTS = {
    REQUEST_OTP: 'REQUEST_OTP',
    VALID_OTP: 'VALID_OTP',
    EXPIRED_OTP: 'EXPIRED_OTP'
}

export const USER_STATUS_CONSTANTS = {
    ACTIVED: 'Actived',
    INACTIVE: 'InActive'
}

export const DEVICE_CONSTANTS = {
    MOBILE: 'Mobile',
    PC: 'PC'
}