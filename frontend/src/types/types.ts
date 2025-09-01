export interface ErrorResponse {
  status: number;
  error: number | string;
  messages: {
    error: string;
  };
}
