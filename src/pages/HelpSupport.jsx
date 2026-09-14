import { HelpCircle, BookOpen, MessageSquare, Mail, ExternalLink, Search } from 'lucide-react';
import { useState } from 'react';

export default function HelpSupport() {
  const [faqSearch, setFaqSearch] = useState('');

  const faqs = [
    {
      q: 'How do I change the status of a ticket?',
      a: 'Click on any ticket in the table or mobile card list to open the Ticket Details panel on the right. In the "Update Status" section, select Open, In Progress, or Resolved.'
    },
    {
      q: 'How does real-time ticket search work?',
      a: 'Type customer name, email address, issue subject, or keywords from the ticket description into the search bar. The list filters instantly.'
    },
    {
      q: 'Can I combine multiple filters?',
      a: 'Yes! You can filter by Status and Priority simultaneously while also having an active text search query.'
    },
    {
      q: 'How are ticket statistics calculated?',
      a: 'Metrics like Total, Open, In Progress, and Resolved are computed live from the ticket database and update dynamically when you change ticket states.'
    }
  ];

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      item.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
        <p className="text-gray-600 mt-1">
          Guides, documentation, and answers to frequently asked questions
        </p>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-sm transition">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-3">
            <BookOpen size={20} />
          </div>
          <h3 className="font-semibold text-gray-900 text-sm mb-1">Knowledge Base</h3>
          <p className="text-xs text-gray-500 mb-3">Browse documentation and standard operating procedures.</p>
          <span className="text-xs font-medium text-blue-600 inline-flex items-center gap-1 cursor-pointer hover:underline">
            View Docs <ExternalLink size={12} />
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-sm transition">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-3">
            <MessageSquare size={20} />
          </div>
          <h3 className="font-semibold text-gray-900 text-sm mb-1">Team Chat</h3>
          <p className="text-xs text-gray-500 mb-3">Collaborate with fellow support team members.</p>
          <span className="text-xs font-medium text-green-600 inline-flex items-center gap-1 cursor-pointer hover:underline">
            Open Slack/Teams <ExternalLink size={12} />
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-sm transition">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-3">
            <Mail size={20} />
          </div>
          <h3 className="font-semibold text-gray-900 text-sm mb-1">Contact Lead</h3>
          <p className="text-xs text-gray-500 mb-3">Escalate critical inquiries directly to support leads.</p>
          <span className="text-xs font-medium text-purple-600 inline-flex items-center gap-1 cursor-pointer hover:underline">
            support-leads@company.com
          </span>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <HelpCircle size={20} className="text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="relative sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-3 pt-2">
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-medium text-sm text-gray-900 mb-1">{faq.q}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <p className="text-sm text-gray-500 text-center py-6">No matching FAQs found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
