import React from 'react';
import classes from './Projects.css';
import w2w from '../../assets/images/W2Whome.png';
import sutureEase from '../../assets/images/SEwBG-1.png';
import spotifyInsight from '../../assets/images/SpotifyInsight.png';
import { Container, Row, Image } from 'react-bootstrap';
import Aux from '../../hoc/Aux';


const projects = (props) => (

	<Aux>
		<section id="projects" className={classes.ProjectsSection}>
		<Container fluid style={{maxWidth: '1440px'}}>
			<h3>&#9672; My Projects</h3>
			<Row className={classes.Row}>
				<div className={classes.ColOne} onClick={props.projectOneClicked}>
					<Image src={w2w} fluid />
					<div className={classes.Overlay}></div>
				</div>
				<div className={classes.ColTwo}>
					<div className={classes.ProjectInfoDiv}>
						<a href="https://what2watch-cf980.web.app/" rel="noopener noreferrer" target="_blank">
								<h4>What2Watch</h4>
						</a>
							<p>
									A web app that allows users to browse movies both in theatres and releasing soon, watch trailers, and shuffle through
									random movies and TV shows at the click of a button. Users can also create an account to log in and save 
									movies or TV shows to a watch list where they can view the items overview, and manage their lists.
							</p>
						<div className={classes.SubInfoDiv}>
							<div style={{textAlign: 'center'}}>
										<p style={{fontWeight: '300'}}>React | Redux &#9671; JavaScript &#9671; Firebase &#9671; TMDB API</p>
										<a href="https://github.com/jaketaylor41/What2WatchReact" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
										<a href="https://what2watch-cf980.web.app/" rel="noopener noreferrer" target="_blank"><i className="fas fa-external-link-square-alt"></i></a>
							</div>
						</div>
					</div>
				</div>
			</Row>

			<Row className={classes.Row}>
				<div className={classes.ColOne} onClick={props.projectTwoClicked}>
					<Image src={spotifyInsight} fluid/>
					<div className={classes.Overlay}></div>
				</div>
					<div className={classes.ColTwo}>
						<div className={classes.ProjectInfoDiv}>
							<a href="https://github.com/jaketaylor41/SpotifyInsight" rel="noopener noreferrer" target="_blank">
								<h4>Spotify Insight</h4>
							</a>
							<p>
									IOS and Android app that showcases a users top artists and top tracks, playlists, and recently played songs. Users can also view artist profiles,
									follow artists, and view a track analysis for each song. 
							</p>
						<div className={classes.SubInfoDiv}>
							<div style={{textAlign: 'center'}}>
								<p style={{fontWeight: '300'}}>React Native | Redux | Hooks &#9671; JavaScript &#9671; Spotify Web API &#9671; Expo</p>
								<a href="https://github.com/jaketaylor41/SpotifyInsight" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
								<a><i className="fas fa-external-link-square-alt"></i></a>
							</div>
						</div>
					</div>
				</div>
			</Row>


			<Row className={classes.Row}>
				<div className={classes.ColOne} onClick={props.projectThreeClicked}>
					<Image src={sutureEase} fluid/>
					<div className={classes.Overlay}></div>
				</div>
					<div className={classes.ColTwo}>
						<div className={classes.ProjectInfoDiv}>
							<a href="https://github.com/jaketaylor41/SutureEaseFinal" rel="noopener noreferrer" target="_blank">
								<h4>Suture Ease IOS App</h4>
							</a>
							<p>
									An IOS app to help sales reps of Suture Ease by providing necessary information to train and 
									showcase the features of the devices. The app includes training videos on how to use the devices, 
									brochures to easily show surgeons, as well as sales aids. With the click of a button, users can also quickly
							</p>
						<div className={classes.SubInfoDiv}>
							<div style={{textAlign: 'center'}}>
								<p style={{fontWeight: '300'}}>Swift &#9671; Xcode</p>
								<a href="https://github.com/jaketaylor41/SutureEaseFinal" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
								<a><i className="fas fa-external-link-square-alt"></i></a>
							</div>
						</div>
					</div>
				</div>
			</Row>


		</Container>
		</section>
	</Aux>


);


export default projects;