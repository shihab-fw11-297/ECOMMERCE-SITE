import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDc2MzBiYzZjMDhjYzM4Y2UwYmM3MyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDQ2NTEyODYsImV4cCI6MTY0NDkxMDQ4Nn0.Q3DvOnv884O2dfrO_MKGMfcIV9HeUwPWQqS30c3nBs4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});