import mongoose,{Schema} from 'mongoose';

// Connect to MongoDB
//mongoose.connect(process.env.MONGODB_URI);
//mongoose.Promise = global.Promise;

// Define the User Schema
const userSchema = new Schema({
    userId: { type: Schema.Types.ObjectId },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, },
    createdAt: { type: Date, default: Date.now },
    phone:{ type: String, },
    address:{ type: String, },
    // Assuming 'Property' is another model
});
   


// profileSchema

const profileSchema = new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      bio: {
        type: String,
      },
      phone: {
        type: String,
      },
      location: {
        city: String,
        state: String,
        country: String,
      },
      socialMediaLinks: {
        type: Map,
        of: String, // For storing links to social profiles like Twitter, LinkedIn, etc.
      },
    },
    {
      timestamps: true,
    }
  );
//saved homesSchema
const savedHomeSchema = new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      propertyId: {
        type: Schema.Types.ObjectId,
        ref: 'Property',
        required: true,
      },
      savedAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
    }
  );
  // recent searchesSchema
  const recentSearchSchema = new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      searchQuery: {
        type: String,
        required: true,
      },
      filters: {
        priceRange: {
          min: Number,
          max: Number,
        },
        bedrooms: Number,
        bathrooms: Number,
        location: String,
      },
      searchedAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
    }
  );
  //messagesSchema
  const messageSchema = new Schema(
    {
      senderId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      recipientId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      propertyId: {
        type: Schema.Types.ObjectId,
        ref: 'Property',
      },
      content: {
        type: String,
        required: true,
      },
      isRead: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );
  
  


const User = mongoose.models.User || mongoose.model('User', userSchema);
const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema);
const SavedHome = mongoose.models.SavedHome || mongoose.model('SavedHome', savedHomeSchema);
const RecentSearch = mongoose.models.RecentSearch || mongoose.model('RecentSearch', recentSearchSchema);
const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);
export default { User, Profile, SavedHome, RecentSearch, Message };
 