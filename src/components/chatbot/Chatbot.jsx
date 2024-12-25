import MessengerCustomerChat from 'react-messenger-customer-chat';
const Chatbot = () => {
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