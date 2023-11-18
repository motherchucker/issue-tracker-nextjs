import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Issue tracker',
  description: '',
};

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold">Welcome to the Issue tracker app</h1>
      <p>This app is created for Next.js learning purposes. Enjoy!</p>
    </div>
  );
}
