import { ApiProperty } from "@nestjs/swagger";

export class ComerClientDto {
    idClient:number;
    nameReason: string;
    rfc: string;
    idSeller: number;
    street: string;
    city: string;
    suburb: string;
    delegation: string;
    cp: string;
    country: string;
    fax: string;
    phone: string;
    mail: string;
    state: string;
    neighborhood: string;
    blackList: string;
    fatherLastName: string;
    motherLastName: string;
    municipalityID: number;
    stateID: number;
    dateBlacklist: Date;
    dateRelease: Date;
    penaltyID: number;
    personType: string;
    rfcApproved: string;
    usuFree: string;
    dateFree: Date;
    noRegistry: number;
    cveEcoActivity: string;
    idType: number;
    idNumber: string;
    notOutside: string;
    notInside: string;
    password: string;
    user: string;
    interbankPass: string;
    bank: string;
    branchOffice: string;
    checkingAccount: string;
    dateInitPenalty: Date;
    dateEndPenalty: Date;
    usuPenalty: string;
    idRepresentative?:number;
    dateBorn: Date;
    autEmiIndetify: string;
    notEscrow: string;
    cveNationality: string;
    cveCountryOrigin: string;
    cveHomeCountry: string;
    cveCountryPhone: string;
    idRepAssociated: number;
    idEvent:number;
    indicted: string;
    process: string;
    dateExecution: Date;
    sendedSirsae: string;
    dateSend: Date;
    sendSirsae: string;
    modifyStatus: string;
}
