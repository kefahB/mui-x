import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  DatePicker,
  DatePickerProps,
  DatePickerFieldProps,
} from '@mui/x-date-pickers/DatePicker';
import {
  useSplitFieldProps,
  useParsedFormat,
  usePickerContext,
} from '@mui/x-date-pickers/hooks';
import { useValidation, validateDate } from '@mui/x-date-pickers/validation';

function CustomDateField(props: DatePickerFieldProps) {
  const { internalProps, forwardedProps } = useSplitFieldProps(props, 'date');

  const pickerContext = usePickerContext();
  const placeholder = useParsedFormat();
  const [inputValue, setInputValue] = useInputValue();

  // Check if the current value is valid or not.
  const { hasValidationError } = useValidation({
    value: pickerContext.value,
    timezone: pickerContext.timezone,
    props: internalProps,
    validator: validateDate,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    const newValue = dayjs(newInputValue, pickerContext.fieldFormat);
    setInputValue(newInputValue);
    pickerContext.setValue(newValue);
  };

  return (
    <TextField
      {...forwardedProps}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      error={hasValidationError}
      focused={pickerContext.open}
      label={pickerContext.label}
      name={pickerContext.name}
      className={pickerContext.rootClassName}
      sx={pickerContext.rootSx}
      ref={pickerContext.rootRef}
    />
  );
}

function useInputValue() {
  const pickerContext = usePickerContext();
  const [lastValueProp, setLastValueProp] = React.useState(pickerContext.value);
  const [inputValue, setInputValue] = React.useState(() =>
    createInputValue(pickerContext.value, pickerContext.fieldFormat),
  );

  if (lastValueProp !== pickerContext.value) {
    setLastValueProp(pickerContext.value);
    if (pickerContext.value && pickerContext.value.isValid()) {
      setInputValue(
        createInputValue(pickerContext.value, pickerContext.fieldFormat),
      );
    }
  }

  return [inputValue, setInputValue] as const;
}

function createInputValue(value: Dayjs | null, format: string) {
  if (value == null) {
    return '';
  }

  return value.isValid() ? value.format(format) : '';
}

function CustomFieldDatePicker(props: DatePickerProps) {
  return (
    <DatePicker slots={{ ...props.slots, field: CustomDateField }} {...props} />
  );
}

export default function MaterialDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CustomFieldDatePicker />
    </LocalizationProvider>
  );
}
