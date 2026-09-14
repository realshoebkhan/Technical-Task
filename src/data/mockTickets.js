// Mock ticket data - extracted for reusability
export const mockTickets = [
  {
    id: 1,
    customer: 'Sarah Johnson',
    customerEmail: 'sarah.johnson@email.com',
    subject: 'Payment Processing Error',
    description: 'Unable to complete payment for order #1234. Getting error code 402.',
    priority: 'high',
    status: 'open',
    createdAt: new Date('2024-01-15T10:30:00'),
    messages: [
      {
        id: 1,
        sender: 'Sarah Johnson',
        senderType: 'customer',
        message: 'I tried to pay for my order but got an error. My card has sufficient balance.',
        timestamp: new Date('2024-01-15T10:30:00')
      },
      {
        id: 2,
        sender: 'Support Team',
        senderType: 'support',
        message: 'We are investigating this issue. Have you tried using a different payment method?',
        timestamp: new Date('2024-01-15T11:00:00')
      }
    ]
  },
  {
    id: 2,
    customer: 'Michael Chen',
    customerEmail: 'michael.chen@email.com',
    subject: 'Account Login Issues',
    description: 'Cannot login to my account. Keep getting "invalid credentials" error even after password reset.',
    priority: 'high',
    status: 'in-progress',
    createdAt: new Date('2024-01-14T14:20:00'),
    messages: [
      {
        id: 1,
        sender: 'Michael Chen',
        senderType: 'customer',
        message: 'I\'ve been locked out of my account for 2 days now.',
        timestamp: new Date('2024-01-14T14:20:00')
      },
      {
        id: 2,
        sender: 'Support Team',
        senderType: 'support',
        message: 'Let me check your account status. Can you provide your account ID?',
        timestamp: new Date('2024-01-14T15:00:00')
      },
      {
        id: 3,
        sender: 'Michael Chen',
        senderType: 'customer',
        message: 'Account ID is ACC-987654',
        timestamp: new Date('2024-01-14T15:30:00')
      },
      {
        id: 4,
        sender: 'Support Team',
        senderType: 'support',
        message: 'I\'ve found the issue and am resetting your account now. You should be able to login within 5 minutes.',
        timestamp: new Date('2024-01-14T16:00:00')
      }
    ]
  },
  {
    id: 3,
    customer: 'Emma Williams',
    customerEmail: 'emma.w@email.com',
    subject: 'Subscription Renewal Problem',
    description: 'My annual subscription failed to renew. I was charged but subscription still shows as expired.',
    priority: 'medium',
    status: 'open',
    createdAt: new Date('2024-01-13T09:15:00'),
    messages: [
      {
        id: 1,
        sender: 'Emma Williams',
        senderType: 'customer',
        message: 'My subscription expired on Jan 10 but I was still charged on Jan 11. This is confusing.',
        timestamp: new Date('2024-01-13T09:15:00')
      }
    ]
  },
  {
    id: 4,
    customer: 'James Rodriguez',
    customerEmail: 'james.r@email.com',
    subject: 'Refund Request for Cancelled Order',
    description: 'Cancelled order #5678 last week but haven\'t received refund yet. Expected delivery was in 3 days.',
    priority: 'medium',
    status: 'resolved',
    createdAt: new Date('2024-01-12T13:45:00'),
    messages: [
      {
        id: 1,
        sender: 'James Rodriguez',
        senderType: 'customer',
        message: 'When will I get my refund? I cancelled the order 5 days ago.',
        timestamp: new Date('2024-01-12T13:45:00')
      },
      {
        id: 2,
        sender: 'Support Team',
        senderType: 'support',
        message: 'Refunds typically take 5-7 business days. Let me check your order status.',
        timestamp: new Date('2024-01-12T14:15:00')
      },
      {
        id: 3,
        sender: 'Support Team',
        senderType: 'support',
        message: 'I can see the refund was processed on Jan 11. It should appear in your account by Jan 17.',
        timestamp: new Date('2024-01-12T14:30:00')
      },
      {
        id: 4,
        sender: 'James Rodriguez',
        senderType: 'customer',
        message: 'Great, thank you for checking!',
        timestamp: new Date('2024-01-12T15:00:00')
      }
    ]
  },
  {
    id: 5,
    customer: 'Lisa Park',
    customerEmail: 'lisa.park@email.com',
    subject: 'Feature Request - Dark Mode',
    description: 'Would love to see a dark mode option in the app. Helps with eye strain during evening use.',
    priority: 'low',
    status: 'open',
    createdAt: new Date('2024-01-11T16:20:00'),
    messages: [
      {
        id: 1,
        sender: 'Lisa Park',
        senderType: 'customer',
        message: 'Dark mode would be a game changer for this app. Many competitors have it.',
        timestamp: new Date('2024-01-11T16:20:00')
      },
      {
        id: 2,
        sender: 'Support Team',
        senderType: 'support',
        message: 'Thanks for the suggestion! We\'ve forwarded this to our product team.',
        timestamp: new Date('2024-01-11T17:00:00')
      }
    ]
  },
  {
    id: 6,
    customer: 'David Thompson',
    customerEmail: 'david.t@email.com',
    subject: 'Mobile App Crashes on Startup',
    description: 'App crashes immediately when opening on my iPhone 12. Version 3.2.1.',
    priority: 'high',
    status: 'in-progress',
    createdAt: new Date('2024-01-10T11:00:00'),
    messages: [
      {
        id: 1,
        sender: 'David Thompson',
        senderType: 'customer',
        message: 'The app keeps crashing. I\'ve already tried reinstalling it.',
        timestamp: new Date('2024-01-10T11:00:00')
      },
      {
        id: 2,
        sender: 'Support Team',
        senderType: 'support',
        message: 'Sorry to hear that! Can you tell us your iOS version?',
        timestamp: new Date('2024-01-10T11:30:00')
      },
      {
        id: 3,
        sender: 'David Thompson',
        senderType: 'customer',
        message: 'iOS 17.2.1',
        timestamp: new Date('2024-01-10T12:00:00')
      },
      {
        id: 4,
        sender: 'Support Team',
        senderType: 'support',
        message: 'We found a bug with iOS 17.2.1. A fix will be available in the next update this week.',
        timestamp: new Date('2024-01-10T13:00:00')
      }
    ]
  },
  {
    id: 7,
    customer: 'Rachel Green',
    customerEmail: 'rachel.green@email.com',
    subject: 'Account Access Problem',
    description: 'Trying to upgrade to Premium but account settings page won\'t load.',
    priority: 'medium',
    status: 'resolved',
    createdAt: new Date('2024-01-09T08:30:00'),
    messages: [
      {
        id: 1,
        sender: 'Rachel Green',
        senderType: 'customer',
        message: 'The account settings page keeps timing out. I need to upgrade urgently.',
        timestamp: new Date('2024-01-09T08:30:00')
      },
      {
        id: 2,
        sender: 'Support Team',
        senderType: 'support',
        message: 'We had a brief server issue. Everything is restored now. Please try again.',
        timestamp: new Date('2024-01-09T09:00:00')
      },
      {
        id: 3,
        sender: 'Rachel Green',
        senderType: 'customer',
        message: 'Perfect! It\'s working now. Thank you!',
        timestamp: new Date('2024-01-09T09:15:00')
      }
    ]
  },
  {
    id: 8,
    customer: 'Kevin Murphy',
    customerEmail: 'kevin.murphy@email.com',
    subject: 'API Documentation Question',
    description: 'Need clarification on the rate limiting policy for the API. Max requests per minute?',
    priority: 'low',
    status: 'open',
    createdAt: new Date('2024-01-08T14:10:00'),
    messages: [
      {
        id: 1,
        sender: 'Kevin Murphy',
        senderType: 'customer',
        message: 'The API docs don\'t specify rate limits clearly. Can you help?',
        timestamp: new Date('2024-01-08T14:10:00')
      }
    ]
  },
  {
    id: 9,
    customer: 'Nicole Adams',
    customerEmail: 'nicole.adams@email.com',
    subject: 'Order Status Unclear',
    description: 'Order #9876 has been "processing" for 4 days. Is this normal? No tracking info yet.',
    priority: 'medium',
    status: 'open',
    createdAt: new Date('2024-01-07T10:45:00'),
    messages: [
      {
        id: 1,
        sender: 'Nicole Adams',
        senderType: 'customer',
        message: 'My order seems stuck in processing. Can you check what\'s going on?',
        timestamp: new Date('2024-01-07T10:45:00')
      },
      {
        id: 2,
        sender: 'Support Team',
        senderType: 'support',
        message: 'Let me investigate. Can you provide your order number?',
        timestamp: new Date('2024-01-07T11:00:00')
      },
      {
        id: 3,
        sender: 'Nicole Adams',
        senderType: 'customer',
        message: 'Order #9876',
        timestamp: new Date('2024-01-07T11:15:00')
      }
    ]
  },
  {
    id: 10,
    customer: 'Thomas Scott',
    customerEmail: 'thomas.scott@email.com',
    subject: 'Billing Address Update Failed',
    description: 'Tried to update my billing address but got an error. Address is correct format.',
    priority: 'low',
    status: 'resolved',
    createdAt: new Date('2024-01-06T15:30:00'),
    messages: [
      {
        id: 1,
        sender: 'Thomas Scott',
        senderType: 'customer',
        message: 'Your system rejected my address even though it\'s valid.',
        timestamp: new Date('2024-01-06T15:30:00')
      },
      {
        id: 2,
        sender: 'Support Team',
        senderType: 'support',
        message: 'We found a validation bug. It\'s fixed now. Try again!',
        timestamp: new Date('2024-01-06T16:00:00')
      },
      {
        id: 3,
        sender: 'Thomas Scott',
        senderType: 'customer',
        message: 'Works great now, thanks!',
        timestamp: new Date('2024-01-06T16:15:00')
      }
    ]
  },
  {
    id: 11,
    customer: 'Amanda Foster',
    customerEmail: 'amanda.foster@email.com',
    subject: 'Two-Factor Authentication Not Working',
    description: 'Cannot setup 2FA on my account. Authentication app not sending codes properly.',
    priority: 'high',
    status: 'open',
    createdAt: new Date('2024-01-05T12:00:00'),
    messages: [
      {
        id: 1,
        sender: 'Amanda Foster',
        senderType: 'customer',
        message: 'I\'ve been trying to enable 2FA but codes aren\'t coming through from the authenticator app.',
        timestamp: new Date('2024-01-05T12:00:00')
      },
      {
        id: 2,
        sender: 'Support Team',
        senderType: 'support',
        message: 'This might be a time sync issue. Can you check your phone\'s date and time settings?',
        timestamp: new Date('2024-01-05T12:30:00')
      }
    ]
  },
  {
    id: 12,
    customer: 'Mark Daniels',
    customerEmail: 'mark.d@email.com',
    subject: 'Discount Code Not Applied',
    description: 'Promotional code "SAVE20" is not working at checkout. Discount should be 20% off.',
    priority: 'medium',
    status: 'in-progress',
    createdAt: new Date('2024-01-04T09:20:00'),
    messages: [
      {
        id: 1,
        sender: 'Mark Daniels',
        senderType: 'customer',
        message: 'I tried applying code SAVE20 at checkout but it says invalid code.',
        timestamp: new Date('2024-01-04T09:20:00')
      },
      {
        id: 2,
        sender: 'Support Team',
        senderType: 'support',
        message: 'Let me check if this code is active. One moment.',
        timestamp: new Date('2024-01-04T09:45:00')
      },
      {
        id: 3,
        sender: 'Support Team',
        senderType: 'support',
        message: 'The code is valid but might have usage limits. Let me check your account eligibility.',
        timestamp: new Date('2024-01-04T10:00:00')
      }
    ]
  },
  {
    id: 13,
    customer: 'Sophie Martinez',
    customerEmail: 'sophie.m@email.com',
    subject: 'Export Data Feature Request',
    description: 'Would like ability to export my data as CSV or PDF for records and backup purposes.',
    priority: 'low',
    status: 'open',
    createdAt: new Date('2024-01-03T13:50:00'),
    messages: [
      {
        id: 1,
        sender: 'Sophie Martinez',
        senderType: 'customer',
        message: 'Having data export capability would be really useful for my organization.',
        timestamp: new Date('2024-01-03T13:50:00')
      },
      {
        id: 2,
        sender: 'Support Team',
        senderType: 'support',
        message: 'Great suggestion! I\'ve added this to our feature backlog.',
        timestamp: new Date('2024-01-03T14:30:00')
      }
    ]
  },
  {
    id: 14,
    customer: 'Robert Wilson',
    customerEmail: 'robert.w@email.com',
    subject: 'Email Notifications Not Received',
    description: 'Changed notification settings but not receiving any email updates. Checked spam folder.',
    priority: 'medium',
    status: 'resolved',
    createdAt: new Date('2024-01-02T11:15:00'),
    messages: [
      {
        id: 1,
        sender: 'Robert Wilson',
        senderType: 'customer',
        message: 'I enabled all email notifications but haven\'t received any emails.',
        timestamp: new Date('2024-01-02T11:15:00')
      },
      {
        id: 2,
        sender: 'Support Team',
        senderType: 'support',
        message: 'Can you verify your email is confirmed in your account settings?',
        timestamp: new Date('2024-01-02T11:45:00')
      },
      {
        id: 3,
        sender: 'Robert Wilson',
        senderType: 'customer',
        message: 'Let me check... ah, I see the issue. Email wasn\'t confirmed!',
        timestamp: new Date('2024-01-02T12:00:00')
      },
      {
        id: 4,
        sender: 'Support Team',
        senderType: 'support',
        message: 'Great! Confirm your email and notifications should work immediately.',
        timestamp: new Date('2024-01-02T12:15:00')
      }
    ]
  },
  {
    id: 15,
    customer: 'Jessica Lee',
    customerEmail: 'jessica.lee@email.com',
    subject: 'Integration with Third-Party Tool',
    description: 'Trying to integrate your service with Zapier but getting authentication errors.',
    priority: 'high',
    status: 'in-progress',
    createdAt: new Date('2024-01-01T16:40:00'),
    messages: [
      {
        id: 1,
        sender: 'Jessica Lee',
        senderType: 'customer',
        message: 'Zapier integration keeps failing during the auth step. API key is correct.',
        timestamp: new Date('2024-01-01T16:40:00')
      },
      {
        id: 2,
        sender: 'Support Team',
        senderType: 'support',
        message: 'I\'m looking into our Zapier integration. Let me check our logs.',
        timestamp: new Date('2024-01-01T17:00:00')
      }
    ]
  }
];
