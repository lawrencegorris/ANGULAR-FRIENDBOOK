export class Friend {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    chosenLanguage: string;

    public constructor(firstname: string, lastname: string, email: string, phoneNumber: string, chosenLanguage: string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.chosenLanguage = chosenLanguage;
    }
}
