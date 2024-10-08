// src/components/NotFound.js
import React from 'react'; 

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-96">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-500">Sorry, the page you are looking for does not exist.</p>
            <img src="/img/not-found.png" alt="Page Not Found" className="w-96 h-auto" />
        </div>
    );
};

export default NotFound;
