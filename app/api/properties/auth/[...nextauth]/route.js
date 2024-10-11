import NextAuth from "next-auth";
import { GoogleAuthProvider } from "next-auth/providers/google";

import user from "@/models/user";
import connectMongoDB from "@/libs/mongodb";

const handler=NextAuth({
    providers:[
        GoogleAuthProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks:{
        async session({session}){
           return session;
        },

        async signIn({user,account,profile,email}){
            try{
                await connectMongoDB();
                const checkEmail=await user.findOne({email:email});

                if(checkEmail.length===0){
                    await user.insertMany({name:user.name,email:user.email})
                } 
            }catch(error){
                console.log(error);
                
            }
        }
    }
});

export {handler as GET, handler as POST};