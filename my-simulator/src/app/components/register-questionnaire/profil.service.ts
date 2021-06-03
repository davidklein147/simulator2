import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  profil: {
    personally: object;
    professionally: {
      medicalIinstitution: string,
      residency: string,
      department: string,
      yearInResidency: number;
    }
  }

  constructor() {
    this.profil = {
      personally: {
        age: '',
        country: '',
        city: '',
        greduationYear: '',
        academicIinstitution: ''
      },
      professionally: {
        medicalIinstitution: '',
        residency: '',
        department: '',
        yearInResidency:null
      }
    }
  }

  set(key: string, data: object): void {
    console.log(key, data);
    
    this.profil[key] = data;
  }
}
