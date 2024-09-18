import { useForm, useFormContext } from 'react-hook-form';
import { Autocomplete, Stack, TextField } from '@mui/material';
import { Schema, schema } from '../types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { RHFAutocomplete } from '../../components/rhf.autocomplete';

export function Users() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();

  return (
    <Stack sx={{ gap: 2 }}>
      <TextField
        {...register('name')}
        label='Name'
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register('email')}
        label='Email'
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <RHFAutocomplete<Schema> name='states' />
    </Stack>
  );
}
