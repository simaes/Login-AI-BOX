/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Menu,
	Container,
	Button,
	MenuItem,
} from "@mui/material";
import classes from "../styles/Header.module.css";


const pages = ["API مارکت", "درباره ما", "خانه"];

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar
			position="static"
			sx={{ paddingInline: "10%", backgroundColor: "white" }}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Button variant="contained" sx={{ mr: 2 }} className={classes.enterButton} >
						ورود
					</Button>
					<Button
						sx={{ pl: 2, borderLeft: "2px solid #e8e8e8", borderRadius: "0" }}
					>
						ثبت نام
					</Button>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Box
						sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: "40%" }}
					>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ color: "#9b9b9b", display: "block", ml: 3 }}
							>
								{page}
							</Button>
						))}
					</Box>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<img
							src="/logo1.svg"
							alt="../public/logo1.svg"
							width={50}
							height={50}
							style={{ marginInline: "10px" }}
						/>
						<img
							src="/logo2.svg"
							alt="../public/logo2.svg"
							width={50}
							height={50}
						/>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
