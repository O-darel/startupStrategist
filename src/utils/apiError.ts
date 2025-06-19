export class ApiError extends Error {
  statusCode: number;
  details: string;

  constructor(statusCode: number, message: string, details?: string) {
    super(message);
    this.statusCode = statusCode;
    this.details = details || message;
    Error.captureStackTrace(this, this.constructor);
  }
}
