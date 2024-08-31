"use client";
enum ENUM_AUTH_LOGIN_FROM {
    CREDENTIAL = 'CREDENTIAL',
    SOCIAL_GOOGLE = 'SOCIAL_GOOGLE',
}
  
export interface Session {
    _id: string,
    type: string,
    role: string,
    email: string,
    username: string,
    permissions: any,
    loginDate: string | number | Date,
    loginFrom: ENUM_AUTH_LOGIN_FROM,
    exp: number,
}