import prisma from "@/prisma/client";

export async function fetchAllIssues() {
  try {
    const allIssues = await prisma.issue.findMany();
    return allIssues;
  } catch (error) {
    console.error("Prisma Error:", error);
    throw new Error("Failed to fetch issues data.");
  }
}
