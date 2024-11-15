import React from "react";
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// import { zodResolver } from "@hookform/resolvers/zod";
// import { authSchema, SignInData } from "@/schema/auth.schema";

// import { useForm } from "react-hook-form";

// import axios from "axios";

const SignIn = () => {
  //   const form = useForm<SignInData>({
  //     resolver: zodResolver(authSchema),
  //     defaultValues: {
  //       email: "",
  //       password: "",
  //     },
  //   });

  // const onSubmit = async (values: SignInData) => {
  //     console.log("Form Data:" , values);
  //     try
  //     {
  //         const response = await axios.post('/api/auth/login', values);
  //         if (response.status === 200) {
  //             alert('Sign In Success');
  //             // Optionally, handle login success (e.g., store token, redirect)
  //             form.reset();
  //         }
  //         await new Promise((resolve) => setTimeout(resolve, 1000));

  //     }
  //     catch(err)
  //     {
  //         alert("Sign In Fail");
  //     }
  // };
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <h1>Sign In Page</h1>
      </div>
    </section>
  );
};

export default SignIn;
