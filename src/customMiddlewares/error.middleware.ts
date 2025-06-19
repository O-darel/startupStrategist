import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/apiError';
import { errorResponse } from '../utils/response';
import { isDev } from '../config/env';


export const errorHandler = (
  err: Error | ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = err instanceof ApiError ? err.statusCode : 500;
  const message = err.message || 'Internal Server Error';

  // Show stack trace in dev, safe message in prod
  const details = isDev
    ? err.stack || err.message
    : err instanceof ApiError
      ? err.details
      : 'Something went wrong on the server.';

  res.status(statusCode).json(errorResponse(message, statusCode, details));
};
