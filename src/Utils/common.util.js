export const getError = error => {
  let errorMessage = '';
  Object.keys(error.errors).forEach(errorKey => {
    errorMessage = error.errors[errorKey].join(', ');
    errorMessage += '\n';
  });
  return errorMessage;
};