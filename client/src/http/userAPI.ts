import { $host } from "./index";
import jwt_decode from "jwt-decode";


export const registration = async (name: string, email: string, password: string) => {
    const { data } = await $host.post('api/user/registration', { name, email, password });
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token)
}

export const login = async (email: string, password: string) => {
    const { data } = await $host.post('api/user/login', { email, password });
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token)
}

export const check = async () => {
    const { data } = await $host.get('api/user/auth');
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token)
}

export const addGroup = async (groupName: string) => {
    const { data } = await $host.put('api/user/add_group', { groupName: groupName });
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token)
}