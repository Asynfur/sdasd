import { ApiProperty } from "@nestjs/swagger";

export class ComerClientsRepresentativeDto {
    idRepresentative?:number;
    nameReason: string;
    fatherLastName: string;
    motherLastName: string;
    dateBorn: Date;
    rfc: string;
    neighborhood: string;
    personType: string;
    idType: number;
    autEmiIndetify: string;
    idNumber: string;
    notEscrow: string;
    cveNationality: string;
    cveCountryOrigin: string;
    street: string;
    notOutside: string;
    notInside: string;
    city: string;
    suburb: string;
    delegation: string;
    cp: string;
    state: string;
    cveHomeCountry: string;
    fax: string;
    cveCountryPhone: string;
    phone: string;
    mail: string;
    cveEcoActivity: string;
    idRepAssociated: number;
    noRegistry: number;

}
