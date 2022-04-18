import React from 'react';  


const HomeLayout = (props) => {
    return (
    <>
    <div>
       {props.children}
    </div>
    </>
    );
};

export default HomeLayout;