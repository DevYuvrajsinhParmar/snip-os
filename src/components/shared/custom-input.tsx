"use client";

import { forwardRef } from "react";
import { Input } from "../ui/input";
import { Field, FieldLabel } from "../ui/field";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, required, ...props }, ref) => {
    return (
      <Field>
        {label && (
          <FieldLabel>
            {label} {required && <span className="text-destructive">*</span>}
          </FieldLabel>
        )}
        <Input ref={ref} {...props} />
      </Field>
    );
  },
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
