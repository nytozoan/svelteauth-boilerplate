import { writable, type Writable } from "svelte/store";
export const toastList = writable<any>([]);

let listOfActiveToasts:Array<any> = [];
toastList.subscribe(value => listOfActiveToasts = value);
let timeout = 2500;
export const addToast = (toastMessage:string) => {
    toastList.update((value:Array<any>) => [...value, toastMessage]);
    console.log(listOfActiveToasts);
    setTimeout(() => {toastList.update(() => [])}, timeout); // Might need to either replace this, or place it in a "clear all" button.
}

export const dismissToast = () => toastList.update((value:Array<any>) => []); // Will probably need to rewrite this.

// Whenever addToast() is run:
// 1. Create a new object with the following params:
// - message
// - id
// 2. Store this object inside toastList.
// 3. Dismiss toast automatically after 1 second.
// In dismssToast():
// 1. Take an ID.
// 2. Find toast with said ID.
// 3. Either remove that from array, or save a new array that does not contain the toast with that ID.