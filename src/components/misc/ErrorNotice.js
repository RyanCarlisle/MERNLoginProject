import React from 'react';

function ErrorNotice(props) {
    return (
        <div className="errorNotice">
            <span>{props.message}</span>
        </div>
    )
}

export default ErrorNotice;
