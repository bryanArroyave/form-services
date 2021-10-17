import app from './app';
import db from './db';
const start = async (port: number) => {
  const server = app.listen(port);

  connectDb();
  console.log(`Server on port ${port}`);
};

const connectDb = () => {
  db.connect('mongodb://db/mydb');
};

export default { start };
