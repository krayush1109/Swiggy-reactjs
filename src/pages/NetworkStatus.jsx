import React, { useEffect, useState } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NetworkStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        // Function to handle when the user goes offline
        const handleOffline = () => {
            setIsOnline(false);
            toast.loading('You are offline...', { toastId: 'loading' });
        };

        // Function to handle when the user comes back online
        const handleOnline = () => {
            setIsOnline(true);
            toast.dismiss('loading'); // Remove the loading toast
            toast.success('Back to online!');
        };

        // Set up event listeners
        window.addEventListener('offline', handleOffline);
        window.addEventListener('online', handleOnline);

        // Clean up event listeners on unmount
        return () => {
            window.removeEventListener('offline', handleOffline);
            window.removeEventListener('online', handleOnline);
        };
    }, []);

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={true}
                closeOnClick
                draggable
                transition={Slide}
                pauseOnHover
            />
            {/* <h1>Network Status is working</h1> */}
        </div>
    );
};

export default NetworkStatus;
