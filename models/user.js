import mongoose,{Schema} from 'mongoose';
import bcrypt from 'bcrypt';  // Ensure you are importing bcrypt properly

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

// Define the User Schema
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'USER' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    properties: [{ type: Schema.Types.ObjectId, ref: 'Property' }] // Assuming 'Property' is another model
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;    