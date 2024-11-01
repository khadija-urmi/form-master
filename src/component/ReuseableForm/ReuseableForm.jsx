import React from 'react';

const ReuseableForm = ({ formTitle, handleSubmit, submitButtonText = 'Submit', children }) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data);
    }

    return (
        <div>
            {children}
            <form className='w-full max-w-sm bg-white p-6 rounded-lg shadow-md' onSubmit={handleLocalSubmit}>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" type="text" name="name" />
                <br />
                <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" type="email" name="email" id="" />
                <br />
                <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" type="password" name="password" />
                <br />
                <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" type="submit" value={submitButtonText} />
            </form>
        </div>
    );
};

export default ReuseableForm;