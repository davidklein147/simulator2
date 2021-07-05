export class Answer {
    internId: string;
    testId: string;
    testRef: string;
    answerRef: string;
    score: number;
    creationDate: number;

    constructor(internId:string, testId: string, testRef: string){
        this.internId = internId;
        this.testId  = testId;
        this.testRef = testRef;
        this.creationDate = Date.now();
    }
}