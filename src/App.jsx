import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import MainRoutes from './routes/MainRoutes'
import Footer from './components/Footer'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import NetworkStatus from './pages/NetworkStatus'

const App = () => {
  // const isOnline = useOnlineStatus();
  // const [toastId, setToastId] = useState(null);

  // useEffect(() => {
  //   if (!isOnline && !toastId) {
  //     // Show loading toast when offline
  //     const id = toast.loading("No Internet Connection. Please wait...");
  //     setToastId(id);
  //   } else if (isOnline && toastId) {
  //     if (toastId) {

  //       // Delay clearing the toastId until after the toast is completely removed
  //       setTimeout(() => setToastId(null), 3000); // Match the autoClose duration

  //       // Dismiss any loading toast before updating
  //       // setTimeout(()=> toast.dismiss(toastId), 3000 )

  //       // Update and close the toast when online
  //       toast.update(toastId, {
  //         render: "Back to Online 👌",
  //         type: "success",
  //         isLoading: false,
  //         autoClose: 3000, // Auto close after 3 seconds
  //         // onClose: ()=> setToastId(null)
  //       });
  //     }
  //   }
  // }, [isOnline, toastId]);
  // console.log(navigator.onLine)
  
  // console.log(NetworkStatus)

  return (
    <>
      <NetworkStatus />

      <Header />

      <MainRoutes />
      <Footer />
    </>
  )
}

export default App