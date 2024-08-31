"use client";
import { Session } from './types';
import { jwtDecode } from "jwt-decode";
import { getCookie } from 'cookies-next';

let accessToken = getCookie('accessToken');

let User: Session | null = null;
let Auth: boolean = false;

if (accessToken) {
    User = jwtDecode(accessToken as string);
    Auth = User?._id ? true : false;
}

export { User, Auth };