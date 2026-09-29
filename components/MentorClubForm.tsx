'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { MentorClubApplicationSchema, type MentorClubApplicationFormData } from '@/lib/schemas';
import { submitApplicationForm, SUBMISSION_SUCCESS_PATH } from '@/lib/submission';
import { TextInputField, TextAreaField, SelectField } from './FormField';
import { RadioGroup } from './RadioGroup';
import { CheckboxField } from './CheckboxField';
import { Button } from './ui/button';
import Link from 'next/link';
import { LoaderCircle } from 'lucide-react';

const countries = [
  'India', 'United States', 'United Kingdom', 'United Arab Emirates', 'Singapore',
  'Australia', 'Canada', 'Germany', 'France', 'Japan', 'South Korea', 'Brazil',
  'Mexico', 'Netherlands', 'New Zealand', 'Nigeria', 'South Africa', 'Spain',
  'Sweden', 'Switzerland', 'Thailand', 'Turkey', 'Vietnam', 'Other',
].map((country) => ({ value: country, label: country }));

const defaultValues: MentorClubApplicationFormData = {
  fullName: '', email: '', phone: '', linkedinProfileUrl: '', city: '', state: '', country: '', applicantType: 'student',
  collegeName: '', stream: '', year: '', organizationName: '', role: '', yearsOfExperience: '',
  motivation: '', agreeToTerms: false,
};

export function MentorClubForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<MentorClubApplicationFormData>({
    resolver: zodResolver(MentorClubApplicationSchema),
    defaultValues,
    mode: 'onBlur',
  });

  const applicantType = watch('applicantType');
  const agreeToTerms = watch('agreeToTerms');

  const onSubmit = async (data: MentorClubApplicationFormData) => {
    setIsSubmitting(true);
    try {
      await submitApplicationForm(data);
      router.push(SUBMISSION_SUCCESS_PATH);
    } finally {
      setIsSubmitting(false);
    }
  };

  const errorFor = (name: keyof MentorClubApplicationFormData) => errors[name]?.message as string | undefined;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10" noValidate>
      <section className="flex flex-col gap-6">
        <div>
          <h2 className="text-lg font-semibold">About you</h2>
          <p className="text-sm text-muted-foreground mt-1">Tell us a little about yourself.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInputField label="Full Name" required value={watch('fullName')} onChange={(v) => setValue('fullName', v, { shouldValidate: true })} error={errorFor('fullName')} autoComplete="name" />
          <TextInputField label="Email ID" required type="email" value={watch('email')} onChange={(v) => setValue('email', v, { shouldValidate: true })} error={errorFor('email')} autoComplete="email" />
          <TextInputField label="Phone Number" required type="tel" value={watch('phone')} onChange={(v) => setValue('phone', v, { shouldValidate: true })} error={errorFor('phone')} autoComplete="tel" />
          <TextInputField label="LinkedIn Profile URL" required type="url" placeholder="https://www.linkedin.com/in/your-name" value={watch('linkedinProfileUrl')} onChange={(v) => setValue('linkedinProfileUrl', v, { shouldValidate: true })} error={errorFor('linkedinProfileUrl')} autoComplete="url" />
          <TextInputField label="City" required value={watch('city')} onChange={(v) => setValue('city', v, { shouldValidate: true })} error={errorFor('city')} autoComplete="address-level2" />
          <TextInputField label="State" required value={watch('state')} onChange={(v) => setValue('state', v, { shouldValidate: true })} error={errorFor('state')} autoComplete="address-level1" />
          <SelectField label="Country" required value={watch('country')} onChange={(v) => setValue('country', v, { shouldValidate: true })} error={errorFor('country')} placeholder="Select your country" options={countries} />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <RadioGroup label="I am a" required value={applicantType} onChange={(v) => setValue('applicantType', v as 'student' | 'professional', { shouldValidate: true })} options={[{ value: 'student', label: 'Student' }, { value: 'professional', label: 'Professional' }]} error={errorFor('applicantType')} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300">
          {applicantType === 'student' ? <>
            <TextInputField label="College or University Name" required value={watch('collegeName') || ''} onChange={(v) => setValue('collegeName', v, { shouldValidate: true })} error={errorFor('collegeName')} />
            <TextInputField label="Stream" required placeholder="e.g. B.Des" value={watch('stream') || ''} onChange={(v) => setValue('stream', v, { shouldValidate: true })} error={errorFor('stream')} />
            <TextInputField label="Year" required placeholder="e.g. 3rd Year" value={watch('year') || ''} onChange={(v) => setValue('year', v, { shouldValidate: true })} error={errorFor('year')} />
          </> : <>
            <TextInputField label="Organization Name" required value={watch('organizationName') || ''} onChange={(v) => setValue('organizationName', v, { shouldValidate: true })} error={errorFor('organizationName')} />
            <TextInputField label="Role" required placeholder="e.g. Product Designer" value={watch('role') || ''} onChange={(v) => setValue('role', v, { shouldValidate: true })} error={errorFor('role')} />
            <TextInputField label="Years of Experience (YOE)" required value={watch('yearsOfExperience') || ''} onChange={(v) => setValue('yearsOfExperience', v, { shouldValidate: true })} error={errorFor('yearsOfExperience')} />
          </>}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <TextAreaField label="Why do you want to join UXF | Mentor&apos;s Club?" required description="AI-generated answers will not be accepted. Please share your honest perspective in your own words." value={watch('motivation')} onChange={(v) => setValue('motivation', v, { shouldValidate: true })} error={errorFor('motivation')} rows={7} maxLength={5000} />
        <CheckboxField checked={agreeToTerms} onChange={(checked) => setValue('agreeToTerms', checked, { shouldValidate: true })} error={errorFor('agreeToTerms')} label={<span>I agree to the <Link href="/terms-of-service" className="underline underline-offset-2 hover:text-foreground">Terms of Service</Link> and <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-foreground">Privacy Policy</Link>.</span>} />
      </section>

      <div className="flex flex-col gap-3">
        <Button type="submit" size="lg" disabled={isSubmitting || !agreeToTerms} className="w-full sm:w-auto sm:self-start">
          {isSubmitting && <LoaderCircle className="animate-spin" data-icon="inline-start" />}
          {isSubmitting ? 'Submitting…' : 'Submit Application'}
        </Button>
        <p className="text-xs text-muted-foreground">You must agree to the Terms of Service and Privacy Policy before submitting. Applications are reviewed by the UXFoundery team; submission does not guarantee acceptance.</p>
      </div>
    </form>
  );
}
