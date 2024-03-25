import { TextField, Button, TextArea, Callout, Text } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import { Issue } from "@prisma/client";
import { createIssueSchema } from "../../validationSchemas";
import "easymde/dist/easymde.min.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Spinner from "../components/Spinner";

type IssueFormData = z.infer<typeof createIssueSchema>;
type IssueFormProps = {
  createIssue: (data: IssueFormData) => Promise<void>;
  error: any;
  isSumitting: boolean;
};

export function IssueForm({ createIssue, error, isSumitting }: IssueFormProps) {
  console.log(error);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
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
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        {errors.title && (
          <Text color="red" as="p">
            {errors.title.message}
          </Text>
        )}
        <Controller
          name="description"
          control={control}
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
