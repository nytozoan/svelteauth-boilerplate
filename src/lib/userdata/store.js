import { writable } from "svelte/store";

export const fromDatabase = writable ([{
            "firstName": "Jellyfish",
            "lastName": "Nytozoan",
            "role": "ADMIN",
            "email": "jellyfish@nytozoan.com",
            "password": "123"
        }]);