import { MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { useTicketStore } from '../../store/ticketStore';

export default function Conversation({ messages = [], ticketId }) {
  const [replyText, setReplyText] = useState('');
  const { addTicketMessage } = useTicketStore();

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyText.trim() || !ticketId) return;

    addTicketMessage(ticketId, replyText.trim());
    setReplyText('');
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 flex flex-col space-y-4 border border-gray-200">
      <div className="flex items-center gap-2 pb-3 border-b border-gray-200">
        <MessageCircle size={18} className="text-blue-600" />
        <h3 className="font-semibold text-gray-900 text-sm">Conversation</h3>
        <span className="ml-auto text-xs bg-blue-100 text-blue-700 font-medium px-2 py-0.5 rounded-full">
          {messages.length} messages
        </span>
      </div>

      <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
        {messages.length === 0 ? (
          <p className="text-xs text-gray-500 text-center py-4">No previous messages.</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.senderType === 'customer' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[85%] ${
                  msg.senderType === 'customer'
                    ? 'bg-white border border-gray-200 text-gray-800 shadow-2xs'
                    : 'bg-blue-600 text-white'
                } rounded-xl p-3 text-xs`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className={`font-semibold ${msg.senderType === 'customer' ? 'text-gray-700' : 'text-blue-100'}`}>
                    {msg.sender}
                  </p>
                </div>
                <p className="whitespace-pre-wrap leading-relaxed">{msg.message}</p>
                <p
                  className={`text-[10px] mt-1.5 text-right ${
                    msg.senderType === 'customer' ? 'text-gray-400' : 'text-blue-200'
                  }`}
                >
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Quick Reply Form */}
      <form onSubmit={handleSendReply} className="pt-3 border-t border-gray-200 flex gap-2">
        <input
          type="text"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Type a quick reply to customer..."
          className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={!replyText.trim()}
          className="px-3 py-2 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition inline-flex items-center gap-1 flex-shrink-0"
        >
          <Send size={14} />
          <span>Reply</span>
        </button>
      </form>
    </div>
  );
}
