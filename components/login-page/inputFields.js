import { Grid, FormControl, InputLabel, Input, TextField } from "@mui/material";
import React from "react";
import classes from "../../styles/Login.module.css";

export default function InputFields({ name, form, setForm, object }) {
	return (
		<Grid xs={12} sx={{ mt: 5 }} justifyContent="center">
			<FormControl className={classes.form}>
				<InputLabel htmlFor="my-input" className={classes.label} >
					{name}
				</InputLabel>
				<Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => {
					setForm({...form, [object]: e.target.value})
				}} />
			</FormControl>
		</Grid>
	);
}
