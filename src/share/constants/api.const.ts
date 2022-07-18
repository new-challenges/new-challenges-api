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
    USER: {
        NAME: 'user', API_TAG: 'User', METHODS: {
            UPDATE_PROFILE: 'update-profile'
        }
    },
    DICTIONARY: {
        NAME: 'dictionary', API_TAG: 'Dictionary', METHODS: {
            UPDATE_PROFILE: 'update-profile'
        }
    },
    TRANSACTION: {
        NAME: 'transaction', API_TAG: 'transaction', METHODS: {

        }
    },
    QUESTION: {
        NAME: 'question', API_TAG: 'Question', METHODS: {
           
        }
    },
    CHALLENGES: {
        NAME: 'challenges', API_TAG: 'Challenges', METHODS: {
           
        }
    },
}

export const METHODS_CONTSTANSTS = {
    GET_BY_ID: ':id',
    PAGING: 'paging',
    DELETE: ':id',
    UPDATE_STATUS: 'update-status'
}
