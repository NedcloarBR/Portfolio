"use client";

import { useTranslations } from "next-intl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@/components/ui";
import { Section } from "./section";


export function Contact() {
  const t = useTranslations("Contact");

  const formSchema = z.object({
    name: z
      .string()
      .min(3, {
        message: t("Form.NameTooShort"),
      })
      .nonempty({}),
    subject: z.string().nonempty(),
    message: z.string().nonempty(),
  });

  type formType = z.infer<typeof formSchema>;

  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: formType) {
    const { name, subject, message } = values;

    const body = `Name: ${name}\n\nMessage: ${message}`;

    const mailtoLink = `mailto:nedcloar1@hotmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank");
  }

  return (
    <Section.Root id="contact">
      <Section.Title title={t("Title")} />
      <Section.Content className="justify-center items-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Form.Name")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>{t("Form.NameDescription")}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Form.Subject")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    {t("Form.SubjectDescription")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Form.Message")}</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormDescription>
                    {t("Form.MessageDescription")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Section.Content>
    </Section.Root>
  );
}
