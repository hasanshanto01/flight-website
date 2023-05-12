import React from 'react';

const Btn = ({ children, btnStyle }) => {
    return (
        <button className="btn" style={btnStyle}>{children}</button>
    );
};

export default Btn;