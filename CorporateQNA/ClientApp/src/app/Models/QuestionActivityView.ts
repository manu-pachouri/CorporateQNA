import { enumShowFilters, enumSortFilters } from './QuestionFilters';
export enum Activity {
  none = 0,
  like = 1,
  dislike = 2,
  upVote = 3,
}

export class QuestionActivityViewModel {
  questionId: number;
  viewed: boolean;
  activity: Activity;
  activityBy: string;
}

export class questionFilters {
  search: string;
  category: number;
  show: string;
  sort: string;
}
