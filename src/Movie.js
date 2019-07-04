import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }

    render() {
        // console.log(this.props.poster);
        return (
            <div>
                <MoviePoster potato={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    
    static proTypes = {
        poster : PropTypes.string.isRequired
    }

    render(){
        return (
            <img src={this.props.potato} />
        )
    }
}

export default Movie