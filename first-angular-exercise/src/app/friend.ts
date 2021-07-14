export class Friend {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    chosenLanguage: string;
    customMessage: string;

    public constructor(firstname: string, lastname: string, email: string, phoneNumber: string, chosenLanguage: string, customMessage: string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.chosenLanguage = chosenLanguage;
        this.customMessage = customMessage;
    }
}
