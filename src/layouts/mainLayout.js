import React from "react";
import ReactHeader from "../components/Header";

const MainLayout = (props) => {
    return(
        <div>
            <ReactHeader/>
            {props.children}
            <p>©Copyrights 2021 | Regal Movies </p>
        </div>
    )
}
export default MainLayout;