import { IssueForm } from '@/app/components/forms/NewIssueForm';
import { formatIssuesData } from '../helpers';
import { IIssueData } from '../types/issues';
import { axiosClient } from './axios';

export const createIssue = async (data: IssueForm) => {
  return await axiosClient.post('/api/issues', data);
};

export const getIssues = async (): Promise<IIssueData[]> => {
  const issues = await axiosClient.get('/api/issues').then((res) => res.data);
  const formattedIssues = formatIssuesData(issues);
  return formattedIssues;
};
