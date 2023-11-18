import { getIssues } from '@/app/lib/api/issues';
import { IIssueData } from '@/app/lib/types/issues';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import Table, { TTableHeader } from '../tables/Table';

export default async function Issues() {
  const issues = await getIssues();
  const headers: TTableHeader<IIssueData>[] = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Title' },
    { key: 'description', label: 'Description' },
    { key: 'status', label: 'Status' },
    { key: 'createdAt', label: 'Created at' },
    { key: 'updatedAt', label: 'Updated at' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-semibold">Issues Table:</h1>
      <Table headers={headers} data={issues} />
      <Button className="self-end">
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
}
