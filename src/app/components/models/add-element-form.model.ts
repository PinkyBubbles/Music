import { ElementKind } from "./enum/elementKind";

export class AddElementForm{
    elementKind: ElementKind;
    
    constructor(elementKind: ElementKind){
        this.elementKind = elementKind;
    }
}