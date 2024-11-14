// import React from 'react';
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// import { zodResolver } from '@hookform/resolvers/zod';
// import { authSchema, SignInData } from '@/schema/auth.schema';

// import { useForm } from 'react-hook-form';

// const SignInForm = () => {
//     const form = useForm<SignInData>({
//         resolver: zodResolver(authSchema),
//         defaultValues: {
//             email: '',
//             password: '',
//         },
//     });
    

//     const onSubmit = async (values: SignInData) => {
//         console.log("Form Data:" , values);
//         try
//         {
//             await new Promise((resolve) => setTimeout(resolve, 1000));
//             alert("Sign In Success");
//             form.reset();
//         }
//         catch(err)
//         {
//             alert("Sign In Fail");
//         }
//     };
//     return (
//         <section className='bg-white'>
//             <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                
//             </div>
//         </section>
//     )
// };

// export default SignInForm;