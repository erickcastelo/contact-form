/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  RadioProps as TaiRadioProps,
  Radio as TaiRadio,
  Typography,
} from "@material-tailwind/react";
import { LegacyRef } from "react";
import { Controller, UseFormReturn } from "react-hook-form";

export type RadioProps = {
  useForm: UseFormReturn<any, any, undefined>;
  isShowError: boolean;
} & Omit<TaiRadioProps, "icon" | "iconProps">;

export const Radio = ({ isShowError = true, ...props }: RadioProps) => {
  const { useForm, title, ...restProps } = props;
  const {
    control,
    formState: { errors },
  } = useForm;

  return (
    <div className="radio-content h-12">
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
        render={({ field: { onChange, ...fieldProps } }) => (
          <>
            <TaiRadio
              {...fieldProps}
              {...props}
              onChange={onChange}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  fill="none"
                  viewBox="0 0 20 21"
                >
                  <path
                    fill="#0C7D69"
                    d="M10 .75a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 10 .75Zm0 18a8.25 8.25 0 1 1 8.25-8.25A8.26 8.26 0 0 1 10 18.75Zm5.25-8.25a5.25 5.25 0 1 1-10.499 0 5.25 5.25 0 0 1 10.499 0Z"
                  />
                </svg>
              }
              ref={(ref) => {
                if (props.ref) {
                  const refValue = props.ref as LegacyRef<HTMLInputElement>;
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
            {isShowError && errors && errors?.[props?.name ?? ""]?.message && (
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
