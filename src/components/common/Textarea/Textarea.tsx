/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  TextareaProps as TaiTextareaProps,
  Typography,
  Textarea as TaiTextarea,
} from "@material-tailwind/react";
import { LegacyRef } from "react";
import { Controller, UseFormReturn } from "react-hook-form";

type TextareaProps = {
  useForm: UseFormReturn<any, any, undefined>;
} & TaiTextareaProps;

export const Textarea = ({ ...props }: TextareaProps) => {
  const { useForm, title, ...restProps } = props;
  const {
    control,
    formState: { errors },
  } = useForm;

  const hasError = errors && errors?.[props?.name ?? ""]?.message;

  return (
    <div className="area-content h-32">
      {title && (
        <Typography variant="h6" color="blue-gray">
          {title}
          {restProps.required && (
            <span className="text-green-default inline-block ml-2">*</span>
          )}
        </Typography>
      )}

      <Controller
        name={restProps.name ?? ""}
        control={control}
        render={({ field }) => (
          <>
            <TaiTextarea
              error={!!hasError}
              {...field}
              {...restProps}
              labelProps={{
                className:
                  "before:content-none after:content-none label-content",
              }}
              ref={(ref) => {
                if (restProps.ref) {
                  const refValue = restProps.ref as LegacyRef<HTMLInputElement>;
                  if (
                    typeof refValue === "object" &&
                    refValue !== null &&
                    "current" in refValue
                  ) {
                    (refValue as { current: HTMLDivElement | null }).current =
                      ref;
                  }
                }
              }}
            />
            {hasError && (
              <>
                {
                  <small className="text-red-500">
                    {errors?.[props?.name ?? ""]?.message as string}
                  </small>
                }
              </>
            )}
          </>
        )}
      />
    </div>
  );
};
