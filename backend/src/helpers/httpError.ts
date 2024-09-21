  const messages: { [key: number]: string } = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not found",
    409: "Conflict",
  };
  
  interface HttpError extends Error {
    status?: number;
  }
  
  const HttpError = (status: number, message: string = messages[status]): HttpError => {
    const error = new Error(message) as HttpError;
    error.status = status;
    return error;
  };
  
  export default HttpError;