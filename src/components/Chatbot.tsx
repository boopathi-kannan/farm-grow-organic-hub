
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, User, Bot } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const demoResponses: Record<string, string> = {
  default: "Thanks for your question! Our full chatbot will answer all your farming questions once you create an account.",
  tomato: "Tomatoes need regular watering and prefer well-drained soil. Water at the base to avoid leaf diseases.",
  fertilizer: "For organic farming, consider using compost, manure, bone meal, or seaweed extracts as natural fertilizers.",
  pests: "Companion planting, crop rotation, and introducing beneficial insects can help manage pests naturally.",
  soil: "Good soil health is crucial. Test your soil pH and nutrient levels before planting for best results.",
  water: "Most vegetables need about 1-1.5 inches of water per week, either from rainfall or irrigation."
};

function getBotResponse(userMessage: string): string {
  const lowerCaseMessage = userMessage.toLowerCase();
  
  if (lowerCaseMessage.includes("tomato")) {
    return demoResponses.tomato;
  } else if (lowerCaseMessage.includes("fertilizer") || lowerCaseMessage.includes("nutrients")) {
    return demoResponses.fertilizer;
  } else if (lowerCaseMessage.includes("pest") || lowerCaseMessage.includes("bug") || lowerCaseMessage.includes("insect")) {
    return demoResponses.pests;
  } else if (lowerCaseMessage.includes("soil") || lowerCaseMessage.includes("dirt") || lowerCaseMessage.includes("ground")) {
    return demoResponses.soil;
  } else if (lowerCaseMessage.includes("water") || lowerCaseMessage.includes("irrigation") || lowerCaseMessage.includes("rain")) {
    return demoResponses.water;
  }
  
  return demoResponses.default;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your farming assistant. How can I help you today?",
      sender: "bot"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user"
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    
    // Get bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: "bot"
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
    
    setInputMessage("");
  };

  return (
    <section className="py-16 bg-farm-green-100" id="chatbot">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-farm-brown-500">Farming Assistant</h2>
          <p className="text-xl max-w-2xl mx-auto text-farm-brown-400">
            Have questions about your farm? Our assistant is here to help with expert guidance.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-farm-green-200">
          <div className="bg-farm-green-500 text-white p-4">
            <h3 className="font-bold">Farm Assistant</h3>
            <p className="text-sm text-farm-green-100">Online | Ask anything about farming</p>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 bg-farm-green-50">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`rounded-lg p-3 max-w-xs md:max-w-md ${
                    message.sender === 'user' 
                      ? 'bg-farm-green-500 text-white' 
                      : 'bg-gray-100 text-farm-brown-500'
                  }`}
                >
                  <div className="flex items-start">
                    {message.sender === 'bot' && (
                      <Bot className="h-5 w-5 mr-2 mt-0.5 text-farm-green-500" />
                    )}
                    {message.sender === 'user' && (
                      <User className="h-5 w-5 mr-2 mt-0.5 text-white" />
                    )}
                    <p>{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <Input
                placeholder="Ask a farming question..."
                className="flex-1 border-farm-green-200"
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
              />
              <Button type="submit" className="bg-farm-green-500 hover:bg-farm-green-600">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Try asking about tomatoes, fertilizers, pests, soil, or water needs.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
