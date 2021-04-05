import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header" id="header">
                <img className='logo' src="images/Split-Logo.png"></img>
                <h1>Split Shop</h1>
            </div>
        );
    }
}

export default Header;