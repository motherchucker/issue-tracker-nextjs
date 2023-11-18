import { IssueForm } from '@/app/ui/forms/NewIssueForm';
import axios from 'axios';

export const createIssue = async (data: IssueForm) => {
  return await axios.post('/api/issues', data);
};
