import { z } from 'zod';

export const MentorClubApplicationSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters'),

  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),

  phone: z
    .string()
    .regex(/^[0-9+\-\s()]{10,}$/, 'Please enter a valid phone number'),

  linkedinProfileUrl: z
    .string()
    .url('Please enter a valid LinkedIn profile URL')
    .refine((value) => value.includes('linkedin.com/'), 'Please use a LinkedIn profile URL'),

  city: z
    .string()
    .min(2, 'City must be at least 2 characters')
    .max(50, 'City must be less than 50 characters'),

  state: z
    .string()
    .min(2, 'State must be at least 2 characters')
    .max(50, 'State must be less than 50 characters'),

  country: z
    .string()
    .min(2, 'Please select a country')
    .max(100, 'Country must be less than 100 characters'),

  applicantType: z.enum(['student', 'professional'], {
    errorMap: () => ({ message: 'Please select either Student or Professional' }),
  }),

  // Conditional fields for students
  collegeName: z
    .string()
    .max(100, 'College name must be less than 100 characters')
    .optional(),

  stream: z
    .string()
    .max(100, 'Stream must be less than 100 characters')
    .optional(),

  year: z
    .string()
    .max(100, 'Year must be less than 100 characters')
    .optional(),

  // Conditional fields for professionals
  organizationName: z
    .string()
    .max(100, 'Organization name must be less than 100 characters')
    .optional(),

  role: z
    .string()
    .max(100, 'Role must be less than 100 characters')
    .optional(),

  yearsOfExperience: z
    .string()
    .max(100, 'Years of experience must be less than 100 characters')
    .optional(),

  motivation: z
    .string()
    .min(50, 'Please write at least 50 characters explaining your motivation')
    .max(5000, 'Your response must be less than 5000 characters'),

  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the Terms of Service and Privacy Policy',
  }),
}).superRefine((data, ctx) => {
  const requiredByType = data.applicantType === 'student'
    ? [['collegeName', data.collegeName], ['stream', data.stream], ['year', data.year]]
    : [['organizationName', data.organizationName], ['role', data.role], ['yearsOfExperience', data.yearsOfExperience]];

  for (const [path, value] of requiredByType) {
    if (!value?.trim()) {
      ctx.addIssue({ code: 'custom', path: [path], message: 'This field is required' });
    }
  }
});

export type MentorClubApplicationFormData = z.infer<typeof MentorClubApplicationSchema>;
