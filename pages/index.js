/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Grid } from "@mui/material";
import ResponsiveAppBar from "../components/header";
import LoginPage from "../components/login-page/loginPage";

export default function Home() {
	return (
		<Grid>
			<Head>
				<title>Login to AI BOX</title>
				<meta name="description" content="Login to AI BOX" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ResponsiveAppBar />
			<LoginPage />
		</Grid>
	);
}
