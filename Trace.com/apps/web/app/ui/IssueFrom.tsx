"use client";
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

type IssueFormData = z.infer<typeof createIssueSchema>;

export function IssueForm({ issue }: { issue?: Issue }) {
  const [error, setError] = useState("");
  const [isSumitting, setisSumitted] = useState(false);
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(createIssueSchema),
  });

  const createIssue = handleSubmit(async (data) => {
    try {
      setisSumitted(true);
      const response = await axios.post("/api/issues", data);
      router.push("/dashboard");
      setisSumitted(false);
      console.log(response.data);
    } catch (error) {
      setisSumitted(false);
      setError("An unexpected error occured.");
    }
  });

  console.log(register("title"));
  return (
    <div className="max-w-xl space-y-3">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form className="max-w-xl space-y-3" onSubmit={createIssue}>
        <TextField.Root>
          <TextField.Input
            defaultValue={issue?.title ?? undefined}
            placeholder="Title"
            {...register("title")}
          />
        </TextField.Root>
        {errors.title && (
          <Text color="red" as="p">
            {errors.title.message}
          </Text>
        )}
        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description ?? undefined}
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
