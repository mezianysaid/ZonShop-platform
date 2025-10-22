class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

const createError = (statusCode, message) => {
  return new AppError(message, statusCode);
};

module.exports = {
  AppError,
  createError,
};
