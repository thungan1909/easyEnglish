import { MENU_CACHE_KEY } from "../../constants/storage";
import { ProgramAuthDTO } from "../../types/dtos/auth.dto";
import { handleDecrypt, handleEncrypt } from "../encrypt";

class StorageHandler {
    static write(key: string, value: string): void {
        localStorage.setItem(key, handleEncrypt(value))
    }

    static read(key: string): string {
        return handleDecrypt(localStorage.getItem(key) || undefined)
    }

    static remove(key: string): void {
        return localStorage.removeItem(key)
    }

    static clear(): void {
        return localStorage.clear()
    }
 }
 
 export const getMenu = () : ProgramAuthDTO[] | null => {
    const menu = StorageHandler.read(MENU_CACHE_KEY);

    if (!menu) {
        return null;
    }

    return JSON.parse(menu)
 }

 export const setMenu = (menu: ProgramAuthDTO[]) => {
    if (!menu.length) {
        return;
    }

    StorageHandler.write(MENU_CACHE_KEY,JSON.stringify(menu))
 }

 export const clearMenu = (): void => {
    StorageHandler.remove(MENU_CACHE_KEY)
 }