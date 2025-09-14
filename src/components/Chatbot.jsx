import { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am AgriAI bot. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "AIzaSyBbhKyAdwd81-ZYhgfAADbYNlA1lqsb-_Q", // replace with your key
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful farming assistant." },
            ...newMessages.map(msg => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text
            })),
          ],
          max_tokens: 150,
        }),
      });

      const data = await response.json();
      const botReply = data.choices[0].message.content;

      setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { sender: "bot", text: "Sorry, something went wrong!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden z-50">
      <div className="bg-green-700 text-white p-4 font-semibold">AgriAI Chatbot</div>
      <div className="flex-1 p-4 overflow-y-auto h-64">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-3 p-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-green-100 text-green-900 self-end"
                : "bg-gray-100 text-gray-800 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-gray-500 text-sm">Typing...</div>}
      </div>
      <div className="flex border-t border-gray-300">
        <input
          type="text"
          className="flex-1 p-2 focus:outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-green-700 text-white px-4 font-semibold hover:bg-green-800"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
