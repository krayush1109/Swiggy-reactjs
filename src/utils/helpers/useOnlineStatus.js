import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
    
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        addEventListener("offline", () => {
            setOnlineStatus(false)            
        })
        addEventListener("online", () => {
            setOnlineStatus(true)            
        })
    }, [])

    return onlineStatus;
}