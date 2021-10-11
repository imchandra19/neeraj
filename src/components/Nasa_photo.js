import React, { useState } from "react";
import { useEffect } from "react";

export default function NasaPhoto() {
    
   const [photoData, setPhotodata] = useState(null);

    useEffect(() => {
        fetchPhoto();
        

        async function fetchPhoto() {
            const res = await fetch (`https://api.nasa.gov/planetary/apod?api_key=J4TFWuIRaJnV08HoWsV2QvBBcWjOyrZVt6bHLEfb`);
            const data = await res.json();
            setPhotodata(data);
        }
    }, []);

    if (!photoData) return <div />

    return (
        <>
        <div className="nasa_photo_element">
            <img
            src={photoData.url}
            alt={photoData.title} />
        </div>
        <div>
            <h1>{photoData.title}</h1>
            <p>{photoData.date}</p>
            <p>{photoData.explanation}</p>
        </div>
        </>
        
    );
}