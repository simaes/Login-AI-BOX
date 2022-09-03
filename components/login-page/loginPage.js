/* eslint-disable @next/next/no-img-element */
import {
	Grid,
	Typography,
	Button,
	Checkbox,
	FormControlLabel,
} from "@mui/material";
import classes from "../../styles/Login.module.css";
import InputFields from "./inputFields";
import React from "react";

export default function LoginPage() {
	const [form, setForm] = React.useState({
		email: "",
		password: "",
		rememberMe: true,
	});

	return (
		<Grid container justifyContent="center" alignItems="center">
			<Grid item md={6}>
				<img src="/image.svg" alt="image" width="100%" height="auto" />
			</Grid>
			<Grid item md={6} alignItems="center" justifyContent="center">
				<Typography textAlign="center" className={classes.title}>
					ورود
				</Typography>
				<Grid
					xs={6}
					container
					justifyContent="center"
					alignItems="center"
					sx={{ margin: "auto" }}
				>
					<InputFields name="ایمیل" form={form} setForm={setForm} object={"email"} />
					<InputFields name="گذرواژه"  form={form} setForm={setForm} object={"password"} />
					<FormControlLabel
						className={classes.form}
						control={
							<Checkbox
								defaultChecked
								onChange={(e) => {
									setForm({...form, rememberMe: e.target.checked})
								}}
								sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
							/>
						}
						label={<span style={{ fontSize: 16 }}>مرا بخاطر بسپار</span>}
						labelPlacement="start"
					/>
					<Button variant="contained" className={classes.button}>
						وارد شوید
					</Button>
					<Typography textAlign="center" style={{ fontSize: 16 }}>
						<a href="./" className="underline-text">
							گذرواژه خود را فراموش کرده اید؟
						</a>
					</Typography>
					<Typography textAlign="center" style={{ fontSize: 16 }}>
						هنوز حساب کاربری ندارید؟
						<a href="./" className="underline-text">
							{" "}
							ثبت نام کنید
						</a>
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
}
