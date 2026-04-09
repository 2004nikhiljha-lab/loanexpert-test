// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  // Authentication
  LOGIN: `${API_BASE_URL}/auth/login`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  
  // Enquiries
  GET_ENQUIRIES: `${API_BASE_URL}/enquiries`,
  CREATE_ENQUIRY: `${API_BASE_URL}/enquiries`,
  UPDATE_ENQUIRY: `${API_BASE_URL}/enquiries`,
  DELETE_ENQUIRY: `${API_BASE_URL}/enquiries`,
  
  // Admin
  ADMIN_STATS: `${API_BASE_URL}/admin/stats`,
} as const;

// Default configuration for API requests
export const API_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
} as const;
