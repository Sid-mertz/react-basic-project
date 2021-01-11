import React from 'react'

import { Container, Row,  Col } from "reactstrap";
import MoviesPoster from '../../assets/images/movie-banner.png'
import MovieCard from '../../components/MovieCard';
import MovieData from '../../utils/movie.json';

class MoviesList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movies: MovieData
        }
    }
    render(){
        // console.log(MovieData);
        const{movies} = this.state;
        return(
            <div className="c-section c-movies-list">
                <Container> 
                    <h2 className="c-section-title">Popular Movies</h2>
                    <Row> 
                        {movies.slice(0,12).map((movie, i)=>{
                            return(
                              <Col lg={3} md={6} key={i}>
                                    <MovieCard url="/" title={movie.title} poster={movie.posterurl}/>
                               </Col>
                            )
                        })}
                        
                    </Row> 
                </Container>
            </div> 
        )
    }  
}
export default MoviesList