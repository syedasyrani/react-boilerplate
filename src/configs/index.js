const ENV = process.env.ENV
const PORT = process.env.PORT ? process.env.PORT : '3000'
const API_VERSION = process.env.API_VERSION

const SERVER_URL =
  ENV === 'development' || ENV === 'staging'
    ? `https://api-${ENV}.oneflowercloser.com`
    : ENV === 'master'
    ? `https://api.oneflowercloser.com`
    : `http://localhost:${PORT}`

// const API_URL = API_VERSION === 1 ? SERVER_URL : `${SERVER_URL}/v${API_VERSION}`
const API_URL = `${SERVER_URL}`

export { ENV, SERVER_URL, API_VERSION, API_URL }
