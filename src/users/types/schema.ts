import { object, string, z } from 'zod';
import { patterns } from '../../constants';

export const schema = object({
  name: string().min(1, { message: 'Required' }),
  email: string()
    .min(1, { message: 'Email is required' })
    .refine((value) => {
      return (
        patterns.email.test(value),
        {
          message: 'Email not valid',
        }
      );
    }),
  states: z.array(z.string()).min(1).max(2),
});

export type Schema = z.infer<typeof schema>;
