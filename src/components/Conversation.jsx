import { MessageCircle } from 'lucide-react';

export default function Conversation({ messages }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
        <MessageCircle size={18} className="text-blue-600" />
        <h3 className="font-semibold text-gray-900">Conversation</h3>
        <span className="ml-auto text-sm text-gray-600">{messages.length} messages</span>
      </div>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.senderType === 'customer' ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs ${
                msg.senderType === 'customer'
                  ? 'bg-white border border-gray-200'
                  : 'bg-blue-50 border border-blue-200'
              } rounded-lg p-3`}
            >
              <p className="text-xs font-semibold text-gray-600 mb-1">
                {msg.sender}
              </p>
              <p className="text-sm text-gray-900 break-words">{msg.message}</p>
              <p className="text-xs text-gray-500 mt-2">
                {new Date(msg.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
