/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CheckboxProps as TaiCheckboxProps,
  Typography,
  Checkbox as TaiCheckbox,
} from "@material-tailwind/react";
import { LegacyRef } from "react";
import { Controller, UseFormReturn } from "react-hook-form";

type CheckboxProps = {
  useForm: UseFormReturn<any, any, undefined>;
} & Omit<TaiCheckboxProps, "icon" | "iconProps">;

export const Checkbox = ({ ...props }: CheckboxProps) => {
  const { useForm, title, ...restProps } = props;
  const {
    control,
    formState: { errors },
  } = useForm;
  return (
    <div className="checkbox-content h-12">
      {title && (
        <Typography variant="h6" color="blue-gray">
          {title}
          {props.required && (
            <span className="text-green-default inline-block ml-2">*</span>
          )}
        </Typography>
      )}

      <Controller
        name={restProps.name ?? ""}
        control={control}
        render={({ field }) => (
          <div className="flex flex-col">
            <TaiCheckbox
              {...field}
              {...restProps}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill="#0C7D69"
                    d="M16.5 0h-15A1.5 1.5 0 0 0 0 1.5v15A1.5 1.5 0 0 0 1.5 18h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 16.5 0Zm-3.22 7.28-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.751.751 0 0 1 1.06 1.06Z"
                  />
                </svg>
              }
              ref={(ref) => {
                if (restProps.ref) {
                  const refValue = restProps.ref as LegacyRef<HTMLInputElement>;
                  if (
                    typeof refValue === "object" &&
                    refValue !== null &&
                    "current" in refValue
                  ) {
                    (refValue as { current: HTMLInputElement | null }).current =
                      ref;
                  }
                }
              }}
            />
            {errors && errors?.[props?.name ?? ""]?.message && (
              <>
                {
                  <small className="text-red-500">
                    {errors?.[props?.name ?? ""]?.message as string}
                  </small>
                }
              </>
            )}
          </div>
        )}
      />
    </div>
  );
};
