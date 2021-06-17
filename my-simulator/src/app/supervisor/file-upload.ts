export class FileUpload {
    name: string;
    url: string;
    file:File;
    suprevisorId:string;

    constructor(file:File, name: string, supervisorId: string){
        this.file = file;
        this.name = name;
        this.suprevisorId = supervisorId;
    }
}
