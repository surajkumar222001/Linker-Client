import React from 'react';
import {Link} from "react-router-dom";

let Home = () => {
    return (
        <React.Fragment>
            <div className="landing-page">
                <div className="wrapper">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                        <h5 className="display-4 animated zoomIn">Linker Social App</h5>
                        <p className="animated zoomIn">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa eaque facilis hic optio quod vitae voluptatum? Accusamus distinctio eius est fuga, necessitatibus, nisi officia omnis recusandae rem ut voluptatum.</p>
                        <div className="animated jello">
                            <Link to="/users/register" className="btn btn-light btn-sm text-teal">Register</Link>
                            <Link to="/users/login" className="btn btn-teal btn-sm">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Home;
