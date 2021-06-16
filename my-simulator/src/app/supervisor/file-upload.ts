export class FileUpload {
    name: string;
    url: string;
    file:File;
    suprevisorId:string;

    constructor(file:File){
        this.file = file;
    }
}
