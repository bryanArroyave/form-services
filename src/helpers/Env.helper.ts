require('dotenv').config();

import errorCreator from './Errorcreator.helper';
const get = (
  element: string,
  defaultValue?: string | number | boolean
): any => {
  const envData = process.env[element] || defaultValue;
  if (!envData)
    throw errorCreator.create({
      message: `Propiedad ${element} no se encuentra en el archivo .env`,
    });
  return envData;
};

export default { get };
