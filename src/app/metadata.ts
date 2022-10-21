import {Attributes} from "./attributes";
import {Properties} from "./properties";

export class Metadata {
    name: string;
    description: string;
    image: string;
    attributes: Array<Attributes>;
    properties: Properties;
    compiler: string;
}