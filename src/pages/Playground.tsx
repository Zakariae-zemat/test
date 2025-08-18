import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Send, Bot, User, Plus, Settings, Key, MessageSquare, Loader2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface Chat {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
}

export default function Playground() {
  const [apiKey, setApiKey] = useState('');
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState('deepseek/deepseek-r1:free');
  const [isLoading, setIsLoading] = useState(false);
  const [chats, setChats] = useState<Chat[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);

  const models = [
    { id: 'deepseek/deepseek-r1:free', name: 'DeepSeek R1' },
    { id: 'openai/gpt-4o', name: 'GPT-4o' },
    { id: 'openai/gpt-4o-mini', name: 'GPT-4o Mini' },
    { id: 'anthropic/claude-3.5-sonnet', name: 'Claude 3.5 Sonnet' },
    { id: 'anthropic/claude-3.5-haiku', name: 'Claude 3.5 Haiku' },
    { id: 'meta-llama/llama-3.1-70b-instruct', name: 'Llama 3.1 70B' },
    { id: 'meta-llama/llama-3.1-8b-instruct', name: 'Llama 3.1 8B' },
    { id: 'google/gemini-pro-1.5', name: 'Gemini Pro 1.5' },
    { id: 'cohere/command-r-plus', name: 'Command R+' },
    { id: 'mistralai/mistral-large', name: 'Mistral Large' }
  ];

  const currentChat = currentChatId ? chats.find(chat => chat.id === currentChatId) : null;

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: 'New Chat',
      messages: [],
      createdAt: new Date()
    };
    setChats(prev => [newChat, ...prev]);
    setCurrentChatId(newChat.id);
  };

  const sendMessage = async () => {
    if (!currentPrompt.trim()) return;
    if (!apiKey.trim()) {
      alert('Please enter your API key in the settings first!');
      return;
    }

    let chatToUpdate = currentChat;

    if (!chatToUpdate) {
      createNewChat();
      chatToUpdate = chats[0];
    }

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: currentPrompt,
      timestamp: new Date()
    };

    const updatedMessages = [...(chatToUpdate?.messages || []), userMessage];

    setChats(prev => prev.map(chat => 
      chat.id === (currentChatId || chats[0]?.id) 
        ? { 
            ...chat, 
            messages: updatedMessages,
            title: chat.title === 'New Chat' ? currentPrompt.slice(0, 30) + '...' : chat.title
          }
        : chat
    ));

    setCurrentPrompt('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/openrouter/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: updatedMessages.map(msg => ({ role: msg.role, content: msg.content }))
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.choices && data.choices[0] && data.choices[0].message) {
        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.choices[0].message.content,
          timestamp: new Date()
        };

        setChats(prev => prev.map(chat => 
          chat.id === (currentChatId || chats[0]?.id)
            ? { ...chat, messages: [...updatedMessages, assistantMessage] }
            : chat
        ));
      } else {
        throw new Error('Invalid response format from API');
      }

    } catch (err) {
      console.error('API Error:', err);
      alert(`Error: ${err instanceof Error ? err.message : 'Failed to get response'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <div className="w-72 bg-gray-800 border-r border-gray-700 flex flex-col">
        <div className="p-4">
          <Button 
            onClick={createNewChat} 
            className="w-full justify-start bg-black text-white hover:bg-gray-700 transition-all rounded-lg flex items-center transform hover:scale-105 duration-300 shadow-lg"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Chat
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto mt-2">
          {chats.map(chat => (
            <div
              key={chat.id}
              onClick={() => setCurrentChatId(chat.id)}
              className={`p-3 cursor-pointer rounded-lg mb-1 hover:bg-gray-700 ${
                currentChatId === chat.id ? 'bg-gray-700' : ''
              } transition-colors duration-300`}
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-gray-200" />
                <span className="text-sm font-medium truncate !text-gray-900">{chat.title}</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {chat.messages.length} messages
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-700">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full justify-start flex items-center border-gray-600 hover:bg-gray-700 !text-gray-900"
              >
                <Settings className="w-4 h-4 mr-2 !text-gray-900" />
                Settings
              </Button>
            </DialogTrigger>
            <DialogContent className="space-y-4 bg-gray-800 text-gray-200">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 !text-gray-900">
                  <Key className="w-5 h-5 !text-gray-900" />
                  API Configuration
                </DialogTitle>
                <DialogDescription className="!text-gray-200">
                  Enter your API key to start chatting with AI models
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-2">
                <Label htmlFor="apikey" className="!text-gray-200">Your API Key</Label>
                <Input
                  id="apikey"
                  type="password"
                  value={apiKey}
                  onChange={e => setApiKey(e.target.value)}
                  placeholder="sk-or-v1-..."
                  className="bg-gray-700 text-gray-200 border-gray-600 focus:ring-black focus:border-black"
                />
                <p className="text-xs text-gray-400">
                  Enter your DeepSeek R1 Free API key from your account
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="w-56 !text-gray-900">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 !text-gray-900">
              {models.map(model => (
                <SelectItem key={model.id} value={model.id} className="!text-gray-900">
                  {model.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {!apiKey && <span className="text-sm text-red-500">⚠️ API key required</span>}
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {!currentChat || currentChat.messages.length === 0 ? (
            <div className="text-center text-gray-400 mt-20 animate-fadeIn">
              <Bot className="w-12 h-12 mx-auto mb-4 opacity-50 animate-bounce" />
              <h3 className="text-lg font-medium mb-2">Start a conversation</h3>
              <p>Ask me anything and I'll help you out!</p>
            </div>
          ) : (
            currentChat.messages.map(message => (
              <div key={message.id} className={`flex gap-3 transition-transform duration-300 transform hover:scale-105 animate-fadeIn`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  message.role === 'user' ? 'bg-black text-white' : 'bg-gray-700 text-gray-200'
                }`}>
                  {message.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                </div>
                <div className="flex-1 bg-gray-800 rounded-lg p-3 shadow-md animate-fadeIn">
                  <div className="text-sm font-semibold mb-1 capitalize">{message.role}</div>
                  <div className="whitespace-pre-wrap text-gray-200">{message.content}</div>
                </div>
              </div>
            ))
          )}

          {isLoading && (
            <div className="flex gap-3 animate-fadeIn">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 text-gray-200 animate-pulse">
                <Bot className="w-5 h-5" />
              </div>
              <div className="flex-1 bg-gray-800 rounded-lg p-3 shadow-md animate-pulse">
                <div className="text-sm font-semibold mb-1">Assistant</div>
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm text-gray-400">Thinking...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-700 flex gap-2">
          <Textarea
            value={currentPrompt}
            onChange={e => setCurrentPrompt(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            className="flex-1 min-h-[48px] max-h-32 resize-none bg-gray-800 text-gray-200 border-gray-600 rounded-lg p-2 focus:ring-black focus:border-black transition-all"
            rows={1}
          />
          <Button
            onClick={sendMessage}
            disabled={isLoading || !currentPrompt.trim() || !apiKey}
            className="bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105 flex items-center justify-center shadow-lg"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
