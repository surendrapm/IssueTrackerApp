"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";
import { createIssueSchema } from "../../validationSchemas";
import Spinner from "../components/Spinner";

type createIssueSchemaData = z.infer<typeof createIssueSchema>;

type Props = {
  issue?:Issue
};

export function IssueForm({issue}: {issue?: Props}) {



  const [error, setError] = useState<any>("");
  const [isSumitting, setisSumitted] = useState<boolean>(false);
  const router = useRouter();
  console.log("hello");

  const createIssue = async (data: createIssueSchemaData) => {
    try {
      setisSumitted(true);
      const response = await axios.post("/api/issues", data);
      router.push("/dashboard");
      setisSumitted(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError("An un exprected error occured");
      console.error("Form submitting issue ", error);
    }
  };

  console.log(error);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<createIssueSchemaData>({
    resolver: zodResolver(createIssueSchema),
  });

  console.log(register("title"));
  return (
    <div className="max-w-xl space-y-3">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form className="max-w-xl space-y-3" onSubmit={handleSubmit(createIssue)}>
        <TextField.Root>
          <TextField.Input defaultValue={issue?.title} placeholder="Title" {...register("title")} />
        </TextField.Root>
        {errors.title && (
          <Text color="red" as="p">
            {errors.title.message}
          </Text>
        )}
        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {errors.description && (
          <Text color="red" as="p">
            {errors.description.message}
          </Text>
        )}

        <Button disabled={isSumitting}>
          Submit new Issue {isSumitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
}
