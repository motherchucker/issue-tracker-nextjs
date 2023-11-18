import { format } from 'date-fns';
import { DateTimeFormats } from './constants';
import { IIssueData } from './types/issues';

export const formatIssuesData = (issues: IIssueData[]): IIssueData[] => {
  return issues.map((issue) => ({
    ...issue,
    createdAt: format(new Date(issue.createdAt), DateTimeFormats.SHORT_DATE),
    updatedAt: format(new Date(issue.updatedAt), DateTimeFormats.SHORT_DATE),
  }));
};
