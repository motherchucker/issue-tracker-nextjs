import { createIssueSchema } from "@/app/lib/validation/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(_: NextRequest, { params }: Params) {
  const id = parseInt(params.id);

  try {
    const issue = await prisma.issue.findUnique({
      where: { id: id },
    });
    return NextResponse.json(issue, { status: 201 });
  } catch (error) {
    console.log("Error fetching the issue: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  const id = parseInt(params.id);
  const body = await request.json();

  const validation = createIssueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  try {
    const issue = await prisma.issue.findUnique({ where: { id: id } });

    if (!issue) {
      return NextResponse.json({ error: "Issue not found" }, { status: 400 });
    }

    const updatedIssue = await prisma.issue.update({
      where: { id: id },
      data: body,
    });

    return NextResponse.json(updatedIssue, { status: 200 });
  } catch (error) {
    console.error("Error updaing issue: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(_: NextRequest, { params }: Params) {
  const id = parseInt(params.id);

  try {
    const issue = await prisma.issue.findUnique({
      where: { id: id },
    });

    if (!issue) {
      return NextResponse.json({ error: "Issue not found" }, { status: 404 });
    }

    await prisma.issue.delete({ where: { id: id } });

    return NextResponse.json(
      { message: "Issue deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error fetching the issue: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
