import { Radio, RadioProps } from "../common/Radio/Radio";
import "./RadioBox.scss";

export const RadioBox = ({ ...props }: Omit<RadioProps, "isShowError">) => {
  const { useForm } = props;
  const { watch } = useForm;

  const isChecked = watch(props?.name + "");
  const isShowError = false;
  const newProps = { isShowError, ...props };

  return (
    <div
      className={`radio-box-content lg:w-full ${
        isChecked === props.value ? "checked" : ""
      }`}
    >
      <Radio {...newProps} />
    </div>
  );
};
