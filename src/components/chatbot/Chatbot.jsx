import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
const Chatbot = () => {
    console.log(import.meta.env.VITE_PAGEID)
    return (
        <div>
            <MessengerCustomerChat
                pageId={import.meta.env.VITE_PAGEID}
                appId={import.meta.env.VITE_APPID}
            />
        </div>
    );
};

export default Chatbot;