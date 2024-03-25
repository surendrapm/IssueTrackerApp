import { NextRequest, NextResponse } from "next/server";
import { createIssueSchema } from "../../../validationSchemas";
import prisma from "@repo/database";

//creating issues
export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body.title);
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });
  console.log("successfully created issue");
  return NextResponse.json(newIssue, { status: 201 });
}
 