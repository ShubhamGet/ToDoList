import React from 'react'

const DoList = (props) => {
    return (
        <>
            <div className='Todo_style'>
                <i class="fa fa-close" onClick={() => {
                    props.onSelect(props.id);
                }}></i>
                <li>{props.text}</li>
            </div>
        </>
    );
};
export default DoList;
