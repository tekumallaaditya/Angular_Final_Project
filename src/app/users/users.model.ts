export interface User{
    Fname:string,
    Lname:string,
    Email:string,
    Uname:string,
    Password:string
}

export interface UserLogin{
    Uname:string,
    Password:string
}

export interface GetUserInfo{
    Uname: {
    ContactList: any,
    Email:string,
    Fname:string,
    Lname:string,
    id:number
}    
}
export interface extractUser{
    ContactList: any,
    Email:string,
    Fname:string,
    Lname:string,
    id:number
}

export interface AddContact{
    ContactName:string,
    ContactNumber:string,
    Uname:string
}