import mongoose from 'mongoose';

export const bootstrapMongo = async () => {
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
  await mongoose.connect(MONGO_URI, {
    dbName: 'uploading',
  });
  // mongoose.set('debug', true);
  console.log(`MongoDB successfully connected`);
};
