import axios from "axios"
import { API_URL } from "../configs"
import LocalStorageHelper from "./localStorage"
import { Redirect } from "react-router-dom"

let headers = {
  "Access-Control-Allow-Credentials": true,
}

let config = {
  baseURL: API_URL,
  headers,
}

const API = axios.create(config)

const requestInterceptor = (config) => {
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()

  API.isCancel = axios.isCancel
  API.cancelRequest = source.cancel

  const localStorageService = LocalStorageHelper.getData()
  const token = JSON.parse(localStorageService.getToken())

  if (token) {
    config.headers = Object.assign(
      {
        Authorization: `Bearer ${token}`,
      },
      config.headers
    )
  }

  config.cancelToken = source.token
  return config
}

API.interceptors.request.use(requestInterceptor)

API.doRequest = async ({
  url,
  method,
  responseType = "json",
  body = {},
  onSuccess,
}) => {
  try {
    const response = await API[method](url, body)

    if (onSuccess) {
      onSuccess(response)
    }

    return response
  } catch (err) {
    console.error(err)

    // if network error / server down
    if (!err.response) {
      alert(
        "We're unable to send requests the server. There seems to be an issue with your network connection."
      )

      const notRedirectPaths = ["/login"]
      const path = window.location.pathname
      if (!notRedirectPaths.includes(path)) window.location.replace("/logout")
    }

    //if request is cancelled
    if (API.isCancel(err)) {
      console.log(API.isCancel(err))
      console.log(err.message)
    }
  }
}

export default API
