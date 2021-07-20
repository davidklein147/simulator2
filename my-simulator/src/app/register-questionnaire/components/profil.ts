export class Profil {
    userId?: string
    personally: Personally;
    profassionally: Professionally;

    constructor(userId?: string) {
        this.userId = userId
        this.personally = new Personally();
        this.profassionally = new Professionally()
    }
}

export class Personally {
    age: number;
    country: string;
    city: string;
    greduationYear: string;
    academicIinstitution: string;

    constructor() {
        this.age = null,
        this.country = '',
        this.city = '',
        this.greduationYear = '',
        this.academicIinstitution = ''
    }
};

export class Professionally {
    medicalIinstitution: string;
    residency: string;
    department: string;
    yearInResidency: number;

    constructor() {
        this.medicalIinstitution = '',
            this.residency = '',
            this.department = '',
            this.yearInResidency = null
    }
}







