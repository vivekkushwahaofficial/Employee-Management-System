import axios from 'axios';

const REST_API_URL = `${import.meta.API_URL}/api/employees`;

export const listEmployees = () => axios.get(REST_API_URL);

export const createEmployee = (employee) => axios.post(REST_API_URL, employee);
