import { writable } from "svelte/store";

export const fromDatabase = writable ([{
            "firstName": "Jellyfish",
            "lastName": "Nytozoan",
            "email": "jellyfish@nytozoan.com",
            "password": "123"
        }]);