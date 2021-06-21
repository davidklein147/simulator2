export class FileUpload {
    name: string;
    url: string;
    file?: File;
    supervisorId: string;
    date: number;
    

    constructor( name: string, supervisorId: string, file?: File) {
        this.file = file;
        this.name = name;
        this.supervisorId = supervisorId;
        this.date = Date.now()
    }
}
