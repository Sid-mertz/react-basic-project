import React,{Component} from 'react';
import MainLayout from '../../layouts/mainLayout';
import Banner from './banner';
import MoviesList from './movieList';


class HomePage extends Component{
    render(){
        return (
            <div> 
                <MainLayout>
                <Banner/>
                 <MoviesList/>
                </MainLayout>
            </div>
        ); 
    } 
}
export default HomePage;   