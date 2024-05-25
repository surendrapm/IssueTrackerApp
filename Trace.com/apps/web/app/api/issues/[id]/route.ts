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

//API deleting issue using Id

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const issue = await prisma.issue.findUnique({
    where: {
      id: id,
    },
  });

  // res if issue not found
  if (!issue) return NextResponse.json({ error: "issue not found... " }, { status: 404 });

  console.log("deleted succesfully");

  await prisma.issue.delete({
    where: { id: id },
  });

 return NextResponse.json({ msg: "deleted issue succesfully" });
}
