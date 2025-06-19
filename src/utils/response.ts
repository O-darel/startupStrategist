
// Error response structure
export const errorResponse = (message: string, code: number = 500, details: string = 'Something went wrong on the server.') => ({
  status: 'error',
  message,
  error: {
    code,
    details,
  },
});
