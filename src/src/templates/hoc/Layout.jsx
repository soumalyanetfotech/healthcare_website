import React, { useEffect } from 'react';
import Navbar from '../common/Navbar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '.././../stores/accounts/actions/AuthActions';
import { Footer } from '../common/Footer';
import {Ai} from '../common/Ai';

const Layout = ({ checkAuthenticated, load_user, children }) => {
 

    return (
        <div>
            <Navbar />
            
            {children}
            <Ai/>
            <Footer/>
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);