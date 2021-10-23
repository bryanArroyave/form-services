import model from './model';

const getAll = async () => {
  const data = await model.create({
    title: 'String',
    body: 'String',
  });
  console.log(data);

  return data;
};
const get = (id: string | number) => {
  return model.find({});
};
const create = () => {
  return 'ok';
};

export default { getAll, get, create };
