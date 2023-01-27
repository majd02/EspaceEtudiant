import { AppUserRole } from "./AppUserRole";

export class LoginRequest {
    id!:string;
    username  !:string ;
    password  !:string ;
    roles !:string;
}