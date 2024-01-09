import React from 'react';
import prisma from '@repo/database';
import { Table } from '@radix-ui/themes';

export default async function IssuesTable() {
  const issues = await prisma.issue.findMany();
  function formatDate(dateString) {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  }
  
  return (
    <>
 <div className="p-4"> {/* Add padding to the container */}
  <Table.Root className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200">
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell className="py-3 px-6 text-left">Title</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className="py-3 px-6 text-left max-w-xl">Status</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className="py-3 px-6 text-left max-w-xl">CreatedAt</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {issues.map((issue) => (
        <Table.Row key={issue.id} className="bg-gray-50">
          <Table.RowHeaderCell className="py-2 px-6">{issue.title}</Table.RowHeaderCell>
          <Table.Cell className="py-2 px-6">{issue.status}</Table.Cell>
          <Table.Cell className="py-2 px-6 w-max">{formatDate(issue.createdAt)}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table.Root>
</div>

      
    </>
  );
}

  
     
      
