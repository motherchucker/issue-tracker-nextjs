import { TIssueStatus } from './types/issues';

export const DateTimeFormats = {
  SHORT_DATE: 'yyyy-dd-MM',
};

export const issueStatusColorVariants: Record<TIssueStatus, string> = {
  OPEN: 'bg-green-500',
  IN_PROGRESS: 'bg-orange-500',
  CLOSED: 'bg-gray-500',
};

export const statusLabels: Record<TIssueStatus, string> = {
  OPEN: 'Open',
  IN_PROGRESS: 'In progress',
  CLOSED: 'Closed',
};
