import { NgxStorage } from './storage';
import { StorageName } from '../webstorage.utility';
export interface WebStorage extends Storage {
    setItem(key: string, data: string, expirationDate?: Date): void;
}
export declare class CookiesStorage extends NgxStorage {
    protected cachedCookieString: string;
    protected cachedItemsMap: Map<string, string>;
    constructor();
    readonly type: StorageName;
    readonly length: number;
    key(index: number): string | any;
    getItem(key: string): string | any;
    removeItem(key: string): void;
    /**
     * @param key
     * @param value
     * @param expirationDate passing null affects in lifetime cookie
     */
    setItem(key: string, value: string, expirationDate?: Date): void;
    clear(): void;
    forEach(callbackFn: (value: string, key: string) => any): void;
    protected getAllKeys(): Array<string>;
    protected getAllItems(): Map<string, string>;
    /**
     * domain.com         + path="."          = .domain.com
     * domain.com         + path=".sub."      = .sub.domain.com
     * sub.domain.com     + path="sub."       = sub.domain.com
     * www.sub.domain.com + path="."          = .sub.domain.com
     * localhost          + path=".whatever." = localhost
     * @param path
     */
    protected resolveDomain(path: string): string;
    /**
     * This function determines base domain by setting cookie at the highest level possible
     * @url http://rossscrivener.co.uk/blog/javascript-get-domain-exclude-subdomain
     */
    protected getDomain(): string;
}
export declare const cookiesStorage: CookiesStorage;
