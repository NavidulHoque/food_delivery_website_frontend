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
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { Food } from "../food/FoodDisplayServer"
import useCart from "@/hooks/useCart"
import { generateCartFoodList, subTotalPrice } from "@/lib/utils"
import CashMemo from "../cart/CashMemo"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "../ui/label"
import { createOrder } from "@/app/(root)/actions/order"
import { useRouter } from "next/navigation"
import ShowCartEmpty from '@/components/cart/ShowCartEmpty';
import Loader from "../common/Loader"

const formSchema = z.object({

  name: z.string()
    .min(1, "Name is required")
    .min(4, { message: "Name must be at least 4 characters" }),

  email: z.string().min(1, "Email is required").email({ message: "Invalid email address" }),

  address: z.string().min(1, "Address is required"),

  phone: z.string().min(1, "Phone number is required"),

  paymentMethod: z.string()
})

export default function PlaceOrder({ foods }: { foods: Food[] }) {

  const { toast } = useToast()
  const { data, status } = useSession()
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      paymentMethod: "Cash on delivery"
    },
  })

  const { isSubmitting } = form.formState;

  const { cart, isCartEmpty, cartStringArray, loading, setCart } = useCart()

  const cartFoodList = generateCartFoodList(isCartEmpty, foods, cartStringArray)

  const subTotal = !isCartEmpty && subTotalPrice(cart, cartFoodList as Food[], cartStringArray)


  useEffect(() => {

    if (status === "authenticated") {

      form.reset({
        name: data.user.username as string,
        email: data.user.email as string,
        address: "",
        phone: "",
        paymentMethod: "Cash on delivery"
      })
    }

  }, [status, data, form])



  async function onSubmit(values: z.infer<typeof formSchema>) {

    if (status === "authenticated") {

      const foodItems = cartFoodList?.map(food => {

        food.quantity = cart[food.name].toString()

        return food
      })

      const { name, email, address, phone, paymentMethod } = values

      const orderData = {
        foodItems: foodItems as Food[],
        totalPrice: subTotal as number + 2,
        customerDetails: { name, email, address, phone },
        paymentType: paymentMethod,
        userID: data?.user.id as string
      }

      await createOrder(orderData)

      setCart({})

      form.reset()
      router.push("/myOrders")
    }

    else {
      toast({
        variant: "warning",
        description: "Your cart is loading, please wait a moment"
      })
    }
  }

  return (

    <section className={`min-h-[82vh] py-8 ${isCartEmpty ? "flex-center" : ""}`}>

      {loading ? (

        <Loader />

      ) : isCartEmpty ? (

        <ShowCartEmpty />

      ) : (

        <div className="flex gap-x-20">

          <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[47%]">

              <h1 className="text-36-medium mb-8">Delivery Information</h1>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (

                  <FormItem>

                    <FormControl>

                      <Input
                        type="text"
                        placeholder="full name"
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
                        placeholder="email"
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
                        placeholder="address"
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
                        placeholder="phone number"
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
                name="paymentMethod"
                render={({ field }) => (

                  <FormItem>

                    <FormControl>

                      <RadioGroup defaultValue="Cash on delivery">

                        <div className="flex items-center space-x-2">

                          <RadioGroupItem id="delivery" {...field} />

                          <Label htmlFor="delivery">Cash on delivery</Label>

                        </div>

                      </RadioGroup>

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

          <CashMemo subTotal={subTotal as number} isRedirect={false} />

        </div>
      )}

    </section>
  )
}
