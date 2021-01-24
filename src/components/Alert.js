import React from 'react'

const Alert = ({type, message}) => (
    <div className="alert-message mt-3">
        <div className={type === 'error' ? 'alert alert-danger' : 'alert alert-success'} role="alert">
            {message || 'A problem occurred! Unable to fulfill your request'}
        </div>
    </div>
)

export default Alert
