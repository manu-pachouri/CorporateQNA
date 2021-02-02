import { Activity } from './QuestionActivityView';

export enum ansState{
  unmarked = 0,
  marked = 1
}

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
  answerOf:number;
  imageUrl: string;
  likes: number;
  dislikes: number;
  activity:Activity;
  markedAsBest:boolean;
}

export class AnswerActivityModel{
  answerId:number;
  activity:Activity;
  activityBy:string;
}