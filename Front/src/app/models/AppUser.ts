import { AppUserRole } from "./AppUserRole";

export class appuser{
    id !: number;
    firstname !: string;
    lastname !: string;
    password !: string;
    email !: string;
    appUserRole ! : AppUserRole;
    locked !: boolean ;
    enabled !: boolean;
    specialitenom!:String
    
    image !: string;
}