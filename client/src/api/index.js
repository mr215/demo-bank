import axios from 'axios'

const axiosInstance = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export const login = (email, password) => axiosInstance.post(
  '/api/token',
  {
    auth: { email, password }
  }
)

export const fetchProfile = () => axiosInstance.get('/api/profile')
