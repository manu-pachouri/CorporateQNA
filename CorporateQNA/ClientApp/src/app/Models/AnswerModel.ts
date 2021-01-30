import { Activity } from './QuestionActivityView';

export class AnswerAddViewModel {
  answerOf: number;
  description: string;
  answeredOn: Date;
  answeredBy: string;
}

export class AnswerViewModel {
  id: number;
  description: string;
  answeredBy: string;
  answeredOn: string;
  imageUrl: string;
  likes: number;
  dislikes: number;
  activity:Activity;
}

export class AnswerActivityModel{
  answerId:number;
  activity:Activity;
  activityBy:string;
}