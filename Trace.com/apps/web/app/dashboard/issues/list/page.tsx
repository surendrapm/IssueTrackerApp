import React from 'react';
import IssuesTable, { IssueQuery, columnNames } from '../../../ui/IssuesTable';
import prisma from '@repo/database';
import Status from '@repo/database';

import Pagination from '../../../components/Pagination';
import { IssueActions } from './IssueActions';
import {Table } from '@radix-ui/themes';
import { IssueForm } from '../../../ui/IssueFrom';
import IssueStatusBadge from '../../../components/IssueStatusBadge';
import delay from 'delay'
import Link from '../../../components/Link';

interface Props{
  searchParams:IssueQuery
}
 

const page = async({searchParams}:Props) => {

  const issues = await prisma.issue.findMany();
   await delay(2000)
  return (
    <div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issues</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/dashboard/issues/${issue.id}`}>
                  {issue.title}
                </Link>
                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}

export default page