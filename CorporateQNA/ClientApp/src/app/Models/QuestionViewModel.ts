export class QuestionViewModel {
  id:number;
  imageUrl:number;
  title: string;
  description: string;
  views: number;
  upVotes: number;
  answersCount: number;
  askedOn: string;
  askedBy:string;
  askedById:number;
  categoryId:number;
  upVoted:boolean;
  resolved:boolean;
  participated:boolean;
}
