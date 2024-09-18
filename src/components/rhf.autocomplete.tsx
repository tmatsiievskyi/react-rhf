import { Autocomplete } from '@mui/material';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { TOption } from '../types';

type Props<T extends FieldValues> = {
  name: Path<T>;
  options: TOption[];
};

export function RHFAutocomplete<T extends FieldValues>({
  name,
  options,
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref } }) => (
        <Autocomplete
          options={options}
          value={value.map((id: string) =>
            options.find((item) => item.id === id)
          )}
          onChange={}
        />
      )}
    />
  );
}
