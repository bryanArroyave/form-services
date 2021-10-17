import mongoose from 'mongoose';

const connect = async (connectionString: string) => {
  try {
    const db = await mongoose.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`DB connected on ${db.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default { connect };
