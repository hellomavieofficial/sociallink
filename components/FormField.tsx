'use client';

import { FieldGroup, Field, FieldLabel, FieldDescription } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  description?: string;
  error?: string;
  required?: boolean;
  children?: React.ReactNode;
  className?: string;
  invalid?: boolean;
}

export function FormField({
  label,
  description,
  error,
  required,
  children,
  className,
  invalid,
}: FormFieldProps) {
  return (
    <FieldGroup className={className}>
      <Field data-invalid={invalid}>
        <FieldLabel>
          {label}
          {required && <span className="text-orange">*</span>}
        </FieldLabel>
        {children}
        {description && !error && <FieldDescription>{description}</FieldDescription>}
        {error && <FieldDescription className="text-destructive">{error}</FieldDescription>}
      </Field>
    </FieldGroup>
  );
}

interface TextInputFieldProps extends FormFieldProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
}

export function TextInputField({
  value,
  onChange,
  onBlur,
  placeholder,
  type = 'text',
  autoComplete,
  ...fieldProps
}: TextInputFieldProps) {
  return (
    <FormField {...fieldProps} invalid={!!fieldProps.error}>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!fieldProps.error}
      />
    </FormField>
  );
}

interface TextAreaFieldProps extends FormFieldProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
}

export function TextAreaField({
  value,
  onChange,
  onBlur,
  placeholder,
  rows = 5,
  maxLength,
  ...fieldProps
}: TextAreaFieldProps) {
  return (
    <FormField {...fieldProps} invalid={!!fieldProps.error}>
      <div className="relative">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          aria-invalid={!!fieldProps.error}
          className={maxLength ? 'pb-8' : ''}
        />
        {maxLength && (
          <div className="text-xs text-muted-foreground absolute bottom-2 right-3">
            {value.length}/{maxLength}
          </div>
        )}
      </div>
    </FormField>
  );
}

interface SelectFieldProps extends FormFieldProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  options: Array<{ value: string; label: string }>;
}

export function SelectField({
  value,
  onChange,
  onBlur,
  placeholder,
  options,
  ...fieldProps
}: SelectFieldProps) {
  return (
    <FormField {...fieldProps} invalid={!!fieldProps.error}>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          onBlur={onBlur}
          aria-invalid={!!fieldProps.error}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormField>
  );
}
