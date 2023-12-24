import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
const Chatbot = () => {
    return (
        <div>
            <MessengerCustomerChat
                pageId={`${import.meta.env.pageId}`}
                appId={`${import.meta.env.appId}`}
            />,
        </div>
    );
};

export default Chatbot;