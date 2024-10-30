import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

// Change "OnSend" to "onSend" (or vice versa)
export default function ContactOwner({ isOpen, onClose, sellerEmail, onSend }) {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        onSend(message); // Use the correct prop name here
        setMessage("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-30 z-50">
            <div className="bg-white p-6 rounded shadow-lg w-80">
                <h3 className="text-lg font-semibold mb-4">Contact Owner</h3>
                <p className="text-gray-700 mb-2">Owner's Email: {sellerEmail}</p>
                <textarea
                    className="border p-2 w-full mb-4"
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSendMessage}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
