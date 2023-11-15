import * as z from "zod";

export const SignUpValidation = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    username: z
        .string()
        .min(8, { message: "Username must be at least 8 characters" }),
    email: z.string().email(),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" }),
});
export const SignInValidation = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" }),
});
export const PostValidation = z.object({
    caption: z
        .string()
        .min(5, { message: "Must be 5 or more characters..." })
        .max(2200, { message: "Must be less than 2200 characters..." }),
    file: z.custom<File[]>(),
    location: z
        .string()
        .min(2, { message: "Must be more than 2 characters" })
        .max(100, { message: "Must be less than 100 characters" }),
    tags: z.string(),
});
