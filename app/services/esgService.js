import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://esg-server-5.onrender.com/api';

export const getRealTimeESGScores = async (companyName) => {
  try {
    const response = await axios.get(`${API_URL}/esg/real-time-scores`, {
      params: { companyname: companyName },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching real-time ESG scores:', error);
    throw error;
  }
};

export const getHistoricalESGData = async (companyName, year) => {
  try {
    const response = await axios.get(`${API_URL}/esg/historical-scores`, {
      params: { companyname: companyName, year },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching historical ESG data:', error);
    throw error;
  }
};

export const processNlpQuery = async (query) => {
  try {
    const response = await axios.post(`${API_URL}/esg/nlp-query`, { query });
    return response.data;
  } catch (error) {
    console.error('Error processing NLP query:', error);
    throw error;
  }
};

export const uploadDataFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(`${API_URL}/esg/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

export const exportData = async (type, data) => {
  try {
    const response = await axios.post(`${API_URL}/esg/export/${type}`, { data });
    return response.data;
  } catch (error) {
    console.error(`Error exporting data to ${type}:`, error);
    throw error;
  }
};
