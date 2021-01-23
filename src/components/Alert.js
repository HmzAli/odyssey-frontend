import React from 'react'

const Alert = ({type, message}) => (
    <div className="mt-3">
        <div className={type === 'error' ? 'alert alert-danger' : 'alert alert-success'} role="alert">
            {message}
        </div>
    </div>
)

export default Alert
