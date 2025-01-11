"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({

  name: z.string()
    .min(1, "Name is required")
    .min(4, { message: "Name must be at least 4 characters" })
    .regex(/^[a-zA-Z0-9]+$/, { message: "Name can only contain alphanumeric characters (no special characters or spaces allowed)." }),

  email: z.string().min(1, "Email is required").email({ message: "Invalid email address" }),

  address: z.string().min(1, "Address is required"),

  phone: z.string().min(1, "Phone number is required")
})

export default function ShadForm() {

  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: ""
    },
  })

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {

    
  }

  return (
    <div className="space-y-4">

      <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (

              <FormItem>

                <FormControl>

                  <Input
                    type="text"
                    placeholder="Enter your name"
                    disabled={isSubmitting}
                    {...field}
                  />

                </FormControl>

                <FormMessage />

              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (

              <FormItem>

                <FormControl>

                  <Input
                    type="email"
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                    {...field}
                  />

                </FormControl>

                <FormMessage />

              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (

              <FormItem>

                <FormControl>

                  <Input
                    type="text"
                    placeholder="Enter your address"
                    disabled={isSubmitting}
                    {...field}
                  />

                </FormControl>

                <FormMessage />

              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (

              <FormItem>

                <FormControl>

                  <Input
                    type="number"
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                    {...field}
                  />

                </FormControl>

                <FormMessage />

              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
          >
            Confirm Order
          </Button>

        </form>

      </Form>

    </div>
  )
}
