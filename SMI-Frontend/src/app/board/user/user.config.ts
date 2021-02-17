export interface IUser {
    id: number;
    firstname: string;
    lastname: string;
    mail: string;
    phone: number;
    password: string;
    resettoken?: string;
    role: string;
    configs: string;
  }
