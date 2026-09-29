'use client';

import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

interface CheckboxFieldProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string | React.ReactNode;
  error?: string;
  required?: boolean;
}

export function CheckboxField({
  checked,
  onChange,
  label,
  error,
  required,
}: CheckboxFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-3">
        <Checkbox
          checked={checked}
          onCheckedChange={onChange}
          id="terms-checkbox"
          aria-invalid={!!error}
        />
        <label
          htmlFor="terms-checkbox"
          className="text-sm leading-relaxed cursor-pointer"
        >
          {label}
        </label>
      </div>
      {error && <div className="text-sm text-destructive">{error}</div>}
    </div>
  );
}
