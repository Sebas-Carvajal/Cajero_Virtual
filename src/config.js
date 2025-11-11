// src/config.js
const RAILWAY_URL = "https://projectcajerovirtualbackend-production.up.railway.app";

export const API_BASE_URL = 
  window.location.hostname === 'localhost' 
    ? "http://localhost:8080" 
    : RAILWAY_URL;