// Chatbot.js

import React, { useState, useRef, useEffect } from 'react';
{/*import '../accounts/Chatbott.css';*/}

const Chatbott = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [userInput, setUserInput] = useState('');
    const messagesContainerRef = useRef(null);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
        if (!isPopupOpen) {
            setUserInput('');
        }
    };

    const sendMessage = () => {
        if (userInput.trim() === '') return;

        // Display user message
        displayMessage('user', userInput);

        // Clear input field after sending message
        setUserInput('');

        // Focus on the input window after sending a message
        document.getElementById('user-input').focus();

        // Simulate backend response (you will replace this with actual backend communication)
        setTimeout(() => {
            const botResponse = 'This is a sample response from the chatbot.';
            displayMessage('bot', botResponse);
        }, 500);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Prevent the default behavior of the Enter key (form submission)
            event.preventDefault();

            // Call the sendMessage function when Enter is pressed
            sendMessage();
        }
    };

    const displayMessage = (sender, message) => {
        const messagesContainer = messagesContainerRef.current;
        const messageElement = document.createElement('div');
        messageElement.className = `${sender}-message`;
        messageElement.innerText = message;
        messagesContainer.appendChild(messageElement);

        // Scroll to the bottom of the messages
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    useEffect(() => {
        if (isPopupOpen) {
            // Focus on the input window when the popup is opened
            document.getElementById('user-input').focus();
        }
    }, [isPopupOpen]);

    return (
        <div>
            <button onClick={togglePopup}>Open Chat</button>

            {isPopupOpen && (
                <div id="popup-container">
                    <div id="chat-container">
                        <div id="messages" ref={messagesContainerRef}></div>
                        <div id="input-container">
                            <input
                                type="text"
                                id="user-input"
                                placeholder="Type your message"
                                onKeyDown={handleKeyPress}
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                            />
                            <button id="send-button" onClick={sendMessage}>
                                Send
                            </button>
                        </div>
                        <button id="close-button" onClick={togglePopup}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbott;
