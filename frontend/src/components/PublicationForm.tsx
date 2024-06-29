import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { useMutation, useQuery, useQueryClient } from "react-query";
import addPublication from "../lib/mutations/addPublication";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "./ui/select";
import queryUsers from "../lib/queries/queryUsers";

type User = {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
};

const formSchema = z.object({
  title: z.string().min(2).max(40),
  student_id: z.string().min(2),
  year: z.coerce.number(),
});

const PublicationForm = () => {
  const queryClient = useQueryClient();

  const { data, status } = useQuery("users", queryUsers);

  const mutation = useMutation(addPublication, {
    onSuccess: () => {
      queryClient.refetchQueries("publications");
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      student_id: "",
      year: 2000,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  return (
    <section className="flex-1 px-4 max-w-screen-md w-full">
      <h1 className="text-semibold text-3xl text-center pt-10 pb-5">
        Add a Publication{" "}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    className="text-slate-950"
                    placeholder="Title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="student_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student ID</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger className="text-slate-950">
                      <SelectValue placeholder="Select Student" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {status === "success" ? (
                      data.map(({_id, first_name, last_name} : User) => (
                        <SelectItem key={_id} value={_id}>
                          {first_name} {last_name}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="0" disabled>Loading...</SelectItem>
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="text-slate-950"
                    placeholder="2000"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
};
export default PublicationForm;
