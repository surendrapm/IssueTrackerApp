import { NextRequest, NextResponse } from "next/server";
import { createIssueSchema } from "../../../../validationSchemas";
import prisma from "@repo/database";
import { error } from "console";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  //fetching data from requested body
  const body = await req.json();
  //now validating the body data accoding to custom validations using zod
  const validation = createIssueSchema.safeParse(body);
  //if body dont get succesfull validation then response
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  //fetching the perticular issue from db
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!issue)
    return NextResponse.json({ error: "Inavlid Issue" }, { status: 404 });

  const updatedIssue = await prisma.issue.update({
    where: {
      id: issue.id,
    },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(updatedIssue);
}
