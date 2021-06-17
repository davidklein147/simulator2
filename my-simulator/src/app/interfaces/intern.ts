export class UserRegister {
    details: User;
    register: Login;
    role: string;
    roleNum: number;
    moreDetails?

    constructor() {
        this.details = new User();
        this.register = new Login();
        this.role = null;
        this.roleNum = null;
        this.moreDetails = null;
    }
};

export class User {
    id: string;
    name: string;
    passport: string;
    phoneNum: string;

    constructor() {
        this.id = '';
        this.name = '';
        this.passport = '';
        this.phoneNum = '';
    }
}

export class Login {
    userName: string;
    password: string;

    constructor() {
        this.userName = '';
        this.password = '';
    }
}

export interface resLogin {
    _id: string,
    name: string,
    token: string,
    roleNum: number
    headers?
    moreDetails: string
}

