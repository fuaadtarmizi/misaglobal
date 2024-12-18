'use client';
import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import 'leaflet/dist/leaflet.css';

const HomePage = () => {
  const mapRef = useRef(null); // Reference to store the map instance

  useEffect(() => {
    const L = require('leaflet');

    //set the location here
    const permanentLocation = [3.1390, 101.6200]

    // Only initialize the map if it hasn't been initialized yet
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView(permanentLocation, 16);
      
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapRef.current);

      const svgIcon = `
        <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 3.5C10 4.70948 9.14112 5.71836 8 5.94999V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V5.94999C5.85888 5.71836 5 4.70948 5 3.5C5 2.11929 6.11929 1 7.5 1C8.88071 1 10 2.11929 10 3.5Z" fill="#ff0000" />
        </svg>
      `;

      const fillPin = L.divIcon({
        className: 'custom-icon wave-icon',
        html: svgIcon,
        iconSize: [15, 15], // Size of the icon
        iconAnchor: [7.5, 15], // Center the anchor at the bottom of the icon
      });

      L.marker(permanentLocation, { icon: fillPin }).addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    }
  },[]);
  
   

  return (
    <>
      {/* <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>

        
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
          integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
          crossOrigin=""
        />
      </Head> */}

      <main>
        <div id="map" style={{ height: '350px' }}></div>
        <style>{`
          .wave-icon {
            position: relative; /* For the wave animation */
          }

          .wave-icon::before,
          .wave-icon::after {
            content: '';
            position: absolute;
            border-radius: 50%; /* Make it circular */
            border: 2px solid rgba(255, 0, 0, 0.5); /* Wave color and transparency */
            opacity: 0; /* Initially invisible */
          }

          /* First wave line */
          .wave-icon::before {
            width: 65px; /* Width of the wave */
            height: 65px; /* Height of the wave */
            top: -25px; /* Adjust to center the wave correctly */
            left: -16px; /* Adjust to center the wave correctly */
            animation: wave-animation 2.8s infinite; /* Animation */
          }

          /* Second wave line */
          .wave-icon::after {
            width: 150px; /* Width of the wave */
            height: 150px; /* Height of the wave */
            top: -70px; /* Adjust to center the wave correctly */
            left: -57px; /* Adjust to center the wave correctly */
            animation: wave-animation 2.8s infinite; /* Animation with different duration for effect */
          }

          @keyframes wave-animation {
            0% {
              transform: scale(0);
              opacity: 1; /* Start visible */
            }
            50% {
              transform: scale(1);
              opacity: 0; /* Make it disappear */
            }
            100% {
              transform: scale(0);
              opacity: 0; /* Keep it invisible */
            }
          }
        `}</style>
      </main>
    </>
  );
};

export default HomePage;
