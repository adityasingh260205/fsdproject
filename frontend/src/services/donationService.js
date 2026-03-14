import axios from 'axios';

const API_URL = 'https://darshanease-67nv.onrender.com/api/donations/';

// Create a new donation
const createDonation = async (donationData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.post(API_URL, donationData, config);
    return response.data;
};

export default { createDonation };