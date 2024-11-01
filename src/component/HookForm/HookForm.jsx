import React from 'react';
import useHookInput from '../hooks/useHookInput';

const HookForm = () => {
    const nameState = useHookInput("Sultan");
    const emailState = useHookInput("abc@gmail.com");
    const passwordState = useHookInput("123456");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameState.value);
        console.log(emailState.value);
        console.log(passwordState.value);
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text" {...nameState}
                        name="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email" {...emailState}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password" {...passwordState}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <input
                        type="submit"
                        value="Submit"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                    />
                </div>
            </form>
        </div>
    );
};

export default HookForm;