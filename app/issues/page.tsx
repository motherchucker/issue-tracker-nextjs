import { Metadata } from 'next';
import Issues from '../components/issues/Issues';

export const metadata: Metadata = {
  title: 'Issues | Issue tracker',
  description: '',
};

export default function Page() {
  return <Issues />;
}
