export interface AdminLogin{
    Uname:string,
    Password:string
}

export interface AdminList{
    Uname: {
        id:number,
        FirstName:string,
        LastName:string,
        Email:string

    }   
    
}

export interface AdminExt{
    Uname:string,
    id:number,
    FirstName:string,
    LastName:string,
    Email:string
}
export interface User{
    Fname:string,
    Lname:string,
    Email:string,
    Uname:string,
    Password:string
}