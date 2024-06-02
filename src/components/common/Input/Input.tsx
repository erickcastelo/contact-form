/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "@material-tailwind/react";
import { Controller, UseFormReturn } from "react-hook-form";
import {
  Input as TaiInput,
  InputProps as TaiInputPros,
} from "@material-tailwind/react";
import { LegacyRef } from "react";
import "./Input.scss";

type InputProps = {
  useForm: UseFormReturn<any, any, undefined>;
} & TaiInputPros;

export const Input = ({ ...props }: InputProps) => {
  const { useForm, title, ...restProps } = props;
  const {
    control,
    formState: { errors },
  }: UseFormReturn<any, any, undefined> = useForm;

  const hasError = errors && errors?.[props?.name ?? ""]?.message;

  return (
    <div className="input-content h-20">
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
          <>
            <TaiInput
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
                    (refValue as { current: HTMLInputElement | null }).current =
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
