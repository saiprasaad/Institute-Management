export class Staff
{
    id:number;
    staffid:string;
    staffname:string;
    password:string;
    constructor(id,staffid,staffname,password)
    {
        this.id=id;
        this.staffid=staffid;
        this.staffname=staffname;
        this.password=password;
    }
}