import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Slider from '@mui/material/Slider';
import Skeleton from '@mui/material/Skeleton';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function SignUpForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showCnfPassword, setShowCnfPassword] = useState(false);

  const handleClick = () => {
    navigate('/login', { replace: true });
  };

  return (
    <>
      <Stack spacing={3} sx={{my:4}}>
        <TextField name="username" label="Username" />
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          name="confirm"
          label="Confirm Password"
          type={showCnfPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowCnfPassword(!showCnfPassword)} edge="end">
                  <Iconify icon={showCnfPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Slider valueLabelDisplay="auto" defaultValue={3} step={1} marks min={1} max={5} />
      <Skeleton variant="text" width={200} height={40} />
      <Skeleton variant="rectangular" height={60} />

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        SignUp
      </LoadingButton>
    </>
  );
}
