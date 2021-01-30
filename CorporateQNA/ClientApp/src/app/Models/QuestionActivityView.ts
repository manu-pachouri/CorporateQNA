export enum Activity{
    none=0,like=1,dislike,upVote
}

export class QuestionActivityViewModel{
    questionId:number;
    viewed:boolean;
    activity:Activity;
    activityBy:string;
}