

async function sendMessage(message,senderId){
    try{
        const response = await db.message.create({
            data: {
                message,
                senderId,
                receiverId
            }
        });

        return response

    } catch(error){
        console.error("Error sending message:", error);

    }
}

export default sendMessage;
