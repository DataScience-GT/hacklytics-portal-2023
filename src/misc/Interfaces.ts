export interface User {
    Username: string;
    Attributes: { Name: string; Value: string }[];
    UserCreateDate: string;
    UserLastModifiedDate: string;
    Enabled: boolean;
    UserStatus: string;
}

export interface UserData {
    statusCode: number;
    body: {
        ok: number;
        users: User[];
    };
}

export interface MyUser {
    Name: string,
    Email: string,
    CreateDate: string,
    ModifiedDate: string
}