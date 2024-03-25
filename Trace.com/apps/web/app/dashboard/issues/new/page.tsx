"use client";
import React, { useState } from "react";
import { IssueForm } from "../../../ui/IssueFrom";
import axios from "axios";
import { createIssueSchema } from "../../../../validationSchemas";
import { z } from "zod";
import { useRouter } from "next/navigation";

type createIssueSchemaData = z.infer<typeof createIssueSchema>;

const IssueFormData = () => {
  const [error, setError] = useState<any>("");
  const [isSumitting, setisSumitted] = useState<boolean>(false);
  const router = useRouter();
  console.log("hello");

  const createIssue = async (data: createIssueSchemaData) => {
    try {
      // Make an Axios POST request to your server endpoint
      setisSumitted(true);
      const response = await axios.post("/api/issues", data);
      router.push("/dashboard");
      // Handle the response as needed (e.g., show success message)
      setisSumitted(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError("An un exprected error occured");
      // Handle errors (e.g., show error message)
      console.error("Form submitting issue ", error);
    }
  };

  return (
    <IssueForm
      createIssue={createIssue}
      error={error}
      isSumitting={isSumitting                                 }
    />
  );
};

export default IssueFormData;
