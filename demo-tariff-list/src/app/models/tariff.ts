export interface ITariff {
    id : number,
    name : string,
    download : number,
    upload : number,
    benefits : Array<string>,
    price : number
}
