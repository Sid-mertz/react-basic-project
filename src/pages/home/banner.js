import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


import Banner1 from '../../assets/images/banner-1.jpg';
import Banner2 from '../../assets/images/banner-2.jpg';
import Banner3 from '../../assets/images/banner-3.jpg';
import Banner4 from '../../assets/images/banner-4.jpg';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

class Banner extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movies:[
                {
                    image:Banner1,
                    name:"Anything is possiuble",
                    url:""
                },
                {
                    image:Banner2,
                    name:"Working Teluga Movies",
                    url:""
                },
                {
                    image:Banner3,
                    name:"Misti's Romance",
                    url:""
                },
                {
                    image:Banner4,
                    name:"Dirty Hari",
                    url:""
                } 
            ]
        }
    }
    render(){
        const {movies}=this.state;
        return(
            <div className="c-banner">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125} 
                    isIntrinsicHeight={true}
                    totalSlides={movies.length}
                    interval={3000}
                >
                <Slider>
                {movies.map((movie, i)=>{
                    return(
                        <Slide key={i} index={i}>
                            <div className="banner-item" >
                                <img src={movie.image} alt={movie.name}/>
                            </div>
                        </Slide>
                    )
                })}
                </Slider>
                <ButtonBack><CgChevronLeft/></ButtonBack>
                <ButtonNext><CgChevronRight/></ButtonNext>
                </CarouselProvider>
            </div>  
        );
    }
}
export default Banner;