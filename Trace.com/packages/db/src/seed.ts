
import type { Issue } from '@prisma/client'
import { PrismaClient } from '@prisma/client'
import { createIssueSchema } from '../validationSchemas';
const prisma = new PrismaClient()

interface DefaultIssue {
  title: string;
  description: string;
}

const DEFAULT_ISSUES :DefaultIssue[]= [
    //pre populated issues the database
    {
        title : 'UI',
        description:'center the div'
    },
    {
      title : 'Database Connection Error',
      description:'db error'
  },{
    title : 'Mobile App Compatiblity',
    description:'center the div'
  } ,
    {
    title : 'User FeedBack Collection',
     description:'center the div'
  } ,
  {
    title : 'security Vulnerbility',
    description:'center the div'
  },
  {
    title : 'User FeedBack Collection',
    description:'center the div'
  }
] ;

(async () => {
    try {
      await Promise.all(
        DEFAULT_ISSUES.map((issue) =>
        prisma.issue.create({
          data:{
            title:issue.title,
            description:issue.description
          }
         })
      )
      );
    } catch (error) {
      console.error(error);
      process.exit(1);
    } finally {
      await prisma.$disconnect();
    }
  })();