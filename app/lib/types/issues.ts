import { IApiResponse } from './api';

export type TIssueStatus = 'OPEN' | 'IN_PROGRESS' | 'CLOSED';

export interface IIssueData extends IApiResponse {
  id: number;
  title: string;
  description: string;
  status: TIssueStatus;
}
