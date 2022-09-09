import type { User, Uuid } from "../types/user.ts";

export const findUserById = async (uuid: Uuid): Promise<User> => 
    new Promise((resolve, reject) => {
        if (uuid !== "23ceab21-98e3-42c1-85fa-d28ed3f5afb7") {
            throw new Error("User not found");
        }

        setTimeout(() => {
            resolve({
                uuid,
                name: "Alex",
                birthDate: new Date()
            });
        }, 50);
    })

export const createUserDb = async(name: string, birthDate: Date): Promise<User> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                uuid: "23ceab21-98e3-42c1-85fa-d28ed3f5afb7",
                name,
                birthDate
            });
        }, 50);
    })