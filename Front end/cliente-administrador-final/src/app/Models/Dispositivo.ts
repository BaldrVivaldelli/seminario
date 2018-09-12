interface IDispositivo {
    id: string;
    data: string;
    content: string;
}

export class Dispositivo {

    constructor(private id: string, private data: String, private content: String) {
        this.id = id;
        this.data = data;
        this.content = content;
    }
    public static fromJson(productJson: IDispositivo): Dispositivo {

        let result = new Dispositivo(productJson.id, productJson.data,productJson.content);

        return result;
    }

    public static toJson(dataObject: Dispositivo): string {

        let result = JSON.stringify({
            "origin": dataObject.id,
            "name": dataObject.content

        });

        return result;
    }
    public get getId(): string {
        return this.id;
    }
}
