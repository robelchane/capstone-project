import mongoose,{Schema} from 'mongoose';

// Connect to MongoDB
//mongoose.connect(process.env.MONGODB_URI);
//mongoose.Promise = global.Promise;

// Define the User Schema
const userSchema = new Schema({
    userId:  String, 
    name:  String, 
    email:  String, 
    password:  String, 
    createdAt:  Date, 
    phone:  String, 
    address:  String, 
    // Assuming 'Property' is another model
},
{
    timestamps: true,
   }
);
    // Assuming 'Property' is another model



const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;