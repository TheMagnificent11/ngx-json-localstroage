import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor() { }

    getItem<T>(key: string): T {
        const json = localStorage.getItem(key);
        if (!json) return null;

        return JSON.parse(json) as T;
    }

    setItem<T>(key: string, obj: T): void {
        const json = JSON.stringify(obj);
        localStorage.setItem(key, json);
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    clear(): void {
        localStorage.clear();
    }

}
