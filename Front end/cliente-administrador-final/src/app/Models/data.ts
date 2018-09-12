interface IData {
    origin: string;
    data: string;
}
export class Data {
    constructor(private id:String, private data: String) { 
    }
    public static fromJson(productJson: IData): Data {        

        let result = new Data(productJson.origin, productJson.data);

        return result;
    }

    public static toJson(dataObject: Data): string {
        
        let result = JSON.stringify({
            "origin" : dataObject.id, 
            "name" : dataObject.data

        });

        return result;
    }
}
