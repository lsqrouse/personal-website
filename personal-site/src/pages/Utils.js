import { data, contactItems, blogPosts, skills } from "../services/data";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import PasswordInput from "../components/PasswordInput";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	paper: {
		minHeight: "65px",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
	},
	media: {
		width: "100%",
		minHeight: 250,
		minWidth: 250,
	},
	skills: {
		fontVariant: "all-small-caps",
		fontSize: "large",
		border: "thin",
		borderStyle: "dotted",
		borderRadius: "5px",
		margin: "5px 5px 5px 8px",
		padding: "5px",
		background: "#dbe9f1",
		fontWeight: "bold",
		textDecoration: "none",
		color: "#0a3f5e",
	},
	contact: {
		margin: "20px 10px 0px 0px",
	},
	items: {
		margin: "5px",
	},
	links: {
		color: "black",
		borderBottomStyle: "dotted",
		border: "thin",
	},
	header: {
		textAlign: "left",
		padding: "5%",
		margin: "1%",
	},
});

export default function Home() {
	const { firstName, headline, profilePic } = data;
	const profilepic = "images/" + profilePic;
	const classes = useStyles();

	return (
		<Grid container spacing={5} className={classes.root}>
			<Grid item xs={12}>
				<Card className={classes.root}>
					<CardContent>
						<Typography variant="body2" gutterBottom>
							Hello there! This is where I have a few of my personal utility programs hosted.
                            Some of them require maintinence, or just generally are not intended for public usage.
                            Please enter the correct password below to access these resources. 
                            <br />
                            <PasswordInput/>
						</Typography>
					</CardContent>
                    <CardContent>

                    </CardContent>

				</Card>
			</Grid>

		</Grid>
	);
}