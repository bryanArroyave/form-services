import { ErrorCreatorEntity } from './../entities/Errorcreator';

const create = (errorData: ErrorCreatorEntity) => {
  const error: any = new Error(errorData.message);
  error.status = errorData.status || 500;
  if (errorData.customError) error.customError = errorData.customError;
  return error;
};

export default { create };
