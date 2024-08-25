import * as React from 'react';
import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import {styled} from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';


import SpringwoodIcon from "./SpringwoodIcon";
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import {Alert} from "@mui/material";


const Card = styled(MuiCard)(({ theme }) => ({
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'center',
		gap: theme.spacing(4),
		width: '100%',
		padding: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
				padding: theme.spacing(4),
				width: '450px',
		},
		boxShadow:
					'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px',
		...theme.applyStyles('dark', {
				boxShadow:
							'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px',
		}),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
		height: 'auto',
		paddingBottom: theme.spacing(12),
		backgroundImage:
					'radial-gradient(ellipse at 50% 50%, hsl(28,100%,94.9%), hsl(0, 0%, 100%))',
		backgroundRepeat: 'no-repeat',
		[theme.breakpoints.up('sm')]: {
				paddingBottom: 0,
				height: '100dvh',
		},
		...theme.applyStyles('dark', {
				backgroundImage:
							'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.3), hsl(220, 30%, 5%))',
		}),
}));

export default function SignIn() {
		const [showCustomTheme, setShowCustomTheme] = React.useState(true);
		const [emailError, setEmailError] = React.useState(false);
		const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
		const [passwordError, setPasswordError] = React.useState(false);
		const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
		const [open, setOpen] = React.useState(false);
		
		
		const toggleCustomTheme = () => {
				setShowCustomTheme((prev) => !prev);
		};
		
		const handleClickOpen = () => {
				setOpen(true);
		};
		
		const handleClose = (
					event: React.SyntheticEvent | Event,
					reason?: SnackbarCloseReason,
					) => {
				if (reason === 'clickaway') {
						return;
				}
				setOpen(false);
		};
		
		const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
				event.preventDefault();
				//const data = new FormData(event.currentTarget);
				setOpen(true);
/*				console.log({
						email: data.get('email'),
						password: data.get('password'),
				});*/
		};
		
		const validateInputs = () => {
				const email = document.getElementById('email') as HTMLInputElement;
				const password = document.getElementById('password') as HTMLInputElement;
				
				let isValid = true;
				
				if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
						setEmailError(true);
						setEmailErrorMessage('Please enter a valid email address.');
						isValid = false;
				} else {
						setEmailError(false);
						setEmailErrorMessage('');
				}
				
				if (!password.value || password.value.length < 6) {
						setPasswordError(true);
						setPasswordErrorMessage('Password must be at least 6 characters long.');
						isValid = false;
				} else {
						setPasswordError(false);
						setPasswordErrorMessage('');
				}
				
				return isValid;
		};
		
		const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
				color: theme.palette.getContrastText(blueGrey[500]),
				backgroundColor: blueGrey[500],
				'&:hover': {
						backgroundColor: blueGrey[700],
				},
		}));
		
		return (
							<SignInContainer direction="column" justifyContent="space-between">
									<Stack
												sx={{
														justifyContent: 'center',
														height: { xs: '100%', sm: '100dvh' },
														p: 2,
												}}
									>
											<Card sx={{bgcolor: 'hsl(28,58%,88%)'}}>
													<SpringwoodIcon />
													<Typography
																component="h1"
																variant="h4"
																sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
													>
															Sign in
													</Typography>
													<Box
																component="form"
																onSubmit={handleSubmit}
																noValidate
																sx={{
																		display: 'flex',
																		flexDirection: 'column',
																		width: '100%',
																		gap: 2,
																}}
													>
															<FormControl>
																	<FormLabel htmlFor="email">Email</FormLabel>
																	<TextField
																				error={emailError}
																				helperText={emailErrorMessage}
																				id="email"
																				type="email"
																				name="email"
																				placeholder="your@email.com"
																				autoComplete="email"
																				autoFocus
																				required
																				fullWidth
																				variant="outlined"
																				color={emailError ? 'error' : 'info'}
																				sx={{ ariaLabel: 'email' }}
																	/>
															</FormControl>
															<FormControl>
																	<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
																			<FormLabel htmlFor="password">Password</FormLabel>
																	</Box>
																	<TextField
																				error={passwordError}
																				helperText={passwordErrorMessage}
																				name="password"
																				placeholder="••••••"
																				type="password"
																				id="password"
																				autoComplete="current-password"
																				autoFocus
																				required
																				fullWidth
																				variant="outlined"
																				color={passwordError ? 'error' : 'info'}
																	/>
															</FormControl>
															<FormControlLabel
																		control={<Checkbox value="remember" color="info" />}
																		label="Remember me"
															/>
															
															<ColorButton
																		type="submit"
																		fullWidth
																		variant="contained"
																		onClick={validateInputs}
																		color="secondary"
															>
																	Sign in
															</ColorButton>
															<Snackbar
																		anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
																		open={open}
																		autoHideDuration={5000}
																		onClose={handleClose}
															>
																	<Alert variant="filled" severity="error">
																			Wrong Email or Password
																	</Alert>
															</Snackbar>
															<Link
																		href="/ContactUS"
																		variant="body2"
																		sx={{ alignSelf: 'center' }}
															>
																	Don&apos;t have an account? Contact Us
															</Link>
													</Box>
											</Card>
									</Stack>
							</SignInContainer>
		);
}
