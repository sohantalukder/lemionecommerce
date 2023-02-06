import dotenv from 'dotenv';
import mongoose from 'mongoose';
mongoose.set('strictQuery', true);
dotenv.config();
const URI = process.env.MONGO_URI;
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.error(`Error: ${error.message}`.red.underline.bold);
		process.exit(1);
	}
};

export default connectDB;
