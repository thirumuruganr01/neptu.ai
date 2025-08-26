import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import BgImage from "../assets/ashley-black-logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const formSchema = z.object({
  userId: z.string().min(8, {
    message: "Please enter a valid User ID.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const STATIC_CREDENTIALS = {
  userId: "admin123",
  password: "password123",
};

export function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  function onSubmit(values) {
    if (
      values.userId === STATIC_CREDENTIALS.userId &&
      values.password === STATIC_CREDENTIALS.password
    ) {
      console.log("Login successful");
      setLoginError("");
      navigate("/dashboard");
    } else {
      setLoginError("Invalid User ID or Password");
    }
  }

  return (
    <div className="flex gap-24 min-h-screen w-full items-center justify-center bg-black">
      <div className="p-8">
        <img
          src={BgImage}
          alt="Login background"
          className="h-full w-[500px]"
        />
      </div>
      <div className="z-10 w-screen max-w-md rounded-lg p-8 items-center text-start">
        <h2 className="mb-8 text-5xl font-bold text-white">LOGIN</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">User ID</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Ex: 12345678"
                      {...field}
                      className="rounded-full h-14 px-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                      className="rounded-full h-14 px-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {loginError && (
              <div className="text-red-500 text-sm text-center">
                {loginError}
              </div>
            )}
            <div className="pt-4 text-end">
              <Button
                type="submit"
                className="w-[200px] bg-blue-700 hover:bg-blue-500 rounded-full h-14"
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
