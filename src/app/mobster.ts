import {Media} from "./media";
import {Metadata} from "./metadata";
import {Assets} from "./assets";
export class Mobster {
    identifier: string;
    collection: string;
    timestamp: number;
    attributes: string;
    nonce: number;
    type: string;
    name: string;
    creator: string;
    royalties: number;
    uris: Array<string>;
    url: string;
    media: Array<Media>
    isWhitelistedStorage: boolean;
    tags: Array<string>;
    metadata: Metadata;
    ticker: string;
    score: number;
    rank: number;
    isNsfw: boolean;
    assets: Assets;
}