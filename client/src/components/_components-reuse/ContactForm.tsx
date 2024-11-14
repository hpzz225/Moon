'use client';
import Image from 'next/image';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { z } from 'zod';
import FormSubmit from './form/form-submit';

const formSchema = z.object({
    fullName: z
        .string()
        .min(2, { message: 'Họ và tên phải có ít nhất 2 ký tự.' }),
    phoneNumber: z
        .string()
        .regex(/^\d{10}$/, { message: 'Số điện thoại phải gồm 10 chữ số.' }),
    address: z.string().nonempty({ message: 'Địa chỉ không được để trống.' }),
    email: z.string().email({ message: 'Email không hợp lệ.' }),
    services: z
        .array(z.string())
        .min(1, { message: 'Vui lòng chọn ít nhất một dịch vụ.' }),
});

type ContactFormData = z.infer<typeof formSchema>;

const ContactForm = () => {
    const form = useForm<ContactFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            phoneNumber: '',
            address: '',
            email: '',
            services: [],
        },
    });
    const [isPending, setIsPending] = useState<boolean>(false);
    const onSubmit = async (data: ContactFormData) => {
        console.log('Form data:', data);
        setIsPending(true);
        try {
            // Simulate an API call or handle submission logic
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating network delay
            alert('Submission successful!'); // Confirm successful submission
        } catch (error) {
            console.error('Submission error:', error);
            setIsPending(false); // Reset pending state after error
            alert('Submission failed! Please try again.');
        } finally {
            setIsPending(false); // Reset pending state after successful submission or error
        }
    };

    return (
        <section className="container mx-auto  py-16">
            <div className="relative w-full  h-[450px] ">
                <Image
                    src="/images/contactform.png"
                    alt="Contact Form Background"
                    fill
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                    // width={1000}
                    // height={500}
                    sizes="100vw"
                    // className="object-cover"
                />

                <Form {...form}>
                    {/* <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="absolute top-0 bottom-0 right-0 flex justify-between items-center gap-8"
                    > */}
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="absolute top-0 bottom-0 right-0 flex flex-col md:flex-row justify-between items-center gap-8 p-16 mx-auto"
                    >
                        {/* <div className="flex flex-col w-[300px] font-medium gap-6"> */}
                        <div className="flex flex-col w-full max-w-[300px] font-medium gap-6">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Họ và tên"
                                                {...field}
                                                className="bg-white rounded-3xl p-6 focus:outline-none"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Số điện thoại"
                                                {...field}
                                                className="bg-white rounded-3xl p-6 focus:outline-none"
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
                                                placeholder="Địa chỉ"
                                                {...field}
                                                className="bg-white rounded-3xl p-6 focus:outline-none"
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
                                                placeholder="Email"
                                                {...field}
                                                className="bg-white rounded-3xl p-6 focus:outline-none"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* <div className="flex flex-col w-[300px] gap-6 mr-[10vh]"> */}
                        <div className="flex flex-col w-full max-w-[300px] gap-6">
                            <div className="font-semibold text-[#030303]">
                                <p className="text-[20px] mb-6">
                                    Chọn dịch vụ:
                                </p>
                                <div className="flex flex-col gap-4">
                                    {[
                                        'Giặt sấy',
                                        'Giày dép',
                                        'Khăn rèm',
                                        'Gấu bông, Topper',
                                    ].map((service, index) => (
                                        <FormField
                                            key={index}
                                            control={form.control}
                                            name="services"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <label className="flex items-center cursor-pointer gap-4">
                                                            <Checkbox
                                                                checked={
                                                                    field.value?.includes(
                                                                        service
                                                                    ) || false
                                                                }
                                                                onCheckedChange={(
                                                                    checked
                                                                ) => {
                                                                    const newValue =
                                                                        checked
                                                                            ? [
                                                                                  ...(field.value ||
                                                                                      []),
                                                                                  service,
                                                                              ]
                                                                            : field.value?.filter(
                                                                                  (
                                                                                      s
                                                                                  ) =>
                                                                                      s !==
                                                                                      service
                                                                              ) ||
                                                                              [];
                                                                    field.onChange(
                                                                        newValue
                                                                    );
                                                                }}
                                                                className="appearance-none bg-white border border-gray-300 rounded-full w-5 h-5 checked:bg-[#FA7B6E] checked:border-transparent focus:outline-none transition duration-200 ease-in-out"
                                                            />
                                                            <span className="text-gray-800">
                                                                {service}
                                                            </span>
                                                        </label>
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    ))}
                                </div>

                                {form.formState.errors.services && (
                                    <p className="text-red-500">
                                        {form.formState.errors.services.message}
                                    </p>
                                )}
                            </div>

                            <FormSubmit disabled={isPending}>Gửi</FormSubmit>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default ContactForm;
