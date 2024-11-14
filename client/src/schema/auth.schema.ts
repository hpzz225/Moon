import * as z from "zod"


export const authSchema = z.object({
    email: z.string().min(1, "Username is required").trim(),
    password: z.string().min(1, "Password is required").trim(),
})

export type SignInData = z.infer<typeof authSchema>;