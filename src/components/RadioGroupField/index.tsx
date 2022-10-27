import { RadioButton } from "../../design-system/components";

export type RadioGroupFieldProps = {
  name?: string;
  radioOptions: string[];
  selectedRadioOption?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioGroupField = ({
  name,
  radioOptions,
  selectedRadioOption,
  onChange,
}: RadioGroupFieldProps) => {
  return (
    <>
      {radioOptions.map((option, index) => (
        <RadioButton
          key={index}
          checked={selectedRadioOption === option}
          onChange={onChange}
          inputProps={{ name, value: option }}
        >
          {option}
        </RadioButton>
      ))}
    </>
  );
};
