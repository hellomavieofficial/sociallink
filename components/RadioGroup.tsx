'use client';

import { FieldGroup, Field, FieldLabel } from '@/components/ui/field';
import {
  RadioGroup as RadixRadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: RadioOption[];
  required?: boolean;
  error?: string;
}

export function RadioGroup({
  label,
  value,
  onChange,
  options,
  required,
  error,
}: RadioGroupProps) {
  return (
    <FieldGroup>
      <Field data-invalid={!!error}>
        <FieldLabel>
          {label}
          {required && <span className="text-orange">*</span>}
        </FieldLabel>
        <RadixRadioGroup value={value} onValueChange={onChange}>
          <div className="space-y-3">
            {options.map((option) => (
              <div key={option.value} className="flex items-center gap-3">
                <RadioGroupItem value={option.value} id={`radio-${option.value}`} aria-label={option.label} />
                <label
                  htmlFor={`radio-${option.value}`}
                  className="text-sm font-medium cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </RadixRadioGroup>
        {error && (
          <div className="text-sm text-destructive mt-2">{error}</div>
        )}
      </Field>
    </FieldGroup>
  );
}
