import 'module-alias/register';
import express from 'express';
import mongoose from 'mongoose';
import router from '@routes/index';
import {config} from 'dotenv';
import mockUser from '@utils/MockUser';
import { errorHandler } from '@controllers/error';
import cors from 'cors';

config();
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());

app.use("/v1",router);
app.use(errorHandler)

app.listen(port, async () => {
  console.log('Server is running on port 8080');
  await mongoose.connect(process.env.MONGO_URI as string)
  await mockUser();
});
