import {z} from 'zod';

export const GuestbookEntrySchema = z.object({
    firstName: z.string().min(1, {message: 'First name is required'}),
    lastName: z.string().min(1, {message: 'Last name is required'}),
    message: z.string().min(1, {message: 'Message is required'}),
})