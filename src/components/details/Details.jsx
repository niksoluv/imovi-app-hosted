import styles from './Details.module.css'
import React from 'react';

class Details extends React.Component {

	state = {
		movie: [],
		companies: '',
		imageUrl: ''
	}

	componentDidMount() {
		const state = this.props.location.state
		const url = 'https://api.themoviedb.org/3/movie/' + state['id'] + '?api_key=30c4ec1f7ead936d610a56b54bc4bbd4&language=en-US'
		fetch(url)
			.then((response) => response.json())
			.then(result => {
				this.setState({
					movie: result,
					companies: result['production_countries'][0].iso_3166_1,
					imageUrl: 'https://image.tmdb.org/t/p/w500' + result['poster_path']
				});
			});
	}

	render() {
		const releaseDate = this.state.movie['release_date'] + ` (${this.state.companies})`

		return (
			<div className={styles.detailsWrapper}>
				<div className={styles.detailsImage}>
					<img src={this.state.imageUrl} />
				</div>
				<div className={styles.content}>
					<div>{this.state.movie['original_title']}</div>
					<div>{releaseDate}</div>
					<div>{this.state.movie['tagline']}</div>
				</div>
				<div className={styles.info}>
					<div>
						<div>Overview</div>
						<div>{this.state.movie['overview']}</div>
					</div>
				</div>
			</div>

		)
	}
}

export default Details