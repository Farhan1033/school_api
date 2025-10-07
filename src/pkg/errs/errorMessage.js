export class ErrMessage {
    constructor(message, statusCode, error) {
      this.message = message;
      this.statusCode = statusCode;
      this.error = error;
    }
  
    Message() {
      return this.message;
    }
  
    StatusCode() {
      return this.statusCode;
    }
  
    Error() {
      return this.error;
    }
  }
  
  export const NewInternalServerError = (message) =>
    new ErrMessage(message, 500, "INTERNAL_SERVER_ERROR");
  
  export const NewNotFound = (message) =>
    new ErrMessage(message, 404, "NOT_FOUND");
  
  export const NewFound = (message) =>
    new ErrMessage(message, 302, "FOUND");
  
  export const NewBadRequest = (message) =>
    new ErrMessage(message, 400, "BAD_REQUEST");
  
  export const NewUnauthorized = (message) =>
    new ErrMessage(message, 401, "UNAUTHORIZED");
  
  export const NewUnprocessableEntity = (message) =>
    new ErrMessage(message, 422, "UNPROCESSABLE_ENTITY");
  
  export const NewForbidden = (message) =>
    new ErrMessage(message, 403, "FORBIDDEN");
  