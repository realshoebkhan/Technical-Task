# Customer Support Dashboard

A production-quality, responsive customer support dashboard built for frontend developer technical assessments.

## 🎯 Overview

This Customer Support Dashboard is a modern SaaS-style admin interface that enables support teams to efficiently view, search, filter, manage, and inspect customer support tickets. The application is fully functional with realistic data, smooth interactions, and a polished user experience.

## ✨ Features

### Core Functionality
- **Dashboard Overview**: View key statistics with real-time updates
  - Total tickets count
  - Open tickets count
  - In-progress tickets count
  - Resolved tickets count

- **Ticket Management**
  - View all support tickets in a responsive table (desktop) or card layout (mobile)
  - Search across customer names, emails, subjects, and descriptions
  - Filter by status (Open, In Progress, Resolved)
  - Filter by priority (Low, Medium, High)
  - Combine multiple filters seamlessly

- **Ticket Status Updates**
  - Change ticket status directly from the dashboard
  - Update status from the ticket details panel
  - Statistics update instantly on status changes
  - Filtered results adjust dynamically

- **Ticket Details View**
  - Side drawer on desktop for non-intrusive viewing
  - Full-screen modal on mobile for better usability
  - Complete customer information with avatar
  - Detailed issue description and metadata
  - Full conversation history with customer and support messages
  - Status change controls

- **Conversation History**
  - View chronological message exchange
  - Distinguish between customer and support messages
  - Display timestamps for each message
  - Clean, readable conversation interface

- **State Management**
  - Real-time statistics updates
  - Filter state persistence during interactions
  - Smooth animations and transitions

### UI/UX Features
- **Responsive Design**
  - Desktop: Sidebar navigation with full table view
  - Tablet: Optimized spacing and touch interactions
  - Mobile: Collapsible navigation, card-based layout, full-screen details

- **Smart States**
  - Loading state with skeleton screens while fetching data
  - Error state with retry capability
  - Empty state when no tickets match filters
  - Smooth transitions between states

- **Professional Styling**
  - Clean white/light-gray aesthetic
  - Professional typography hierarchy
  - Subtle borders and shadows
  - Color-coded status and priority badges
  - Hover states and focus indicators for accessibility
  - Consistent spacing and visual rhythm

## 🛠 Tech Stack

- **React 18** - UI framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first styling
- **Zustand** - Lightweight state management
- **Lucide React** - Beautiful icon library
- **JavaScript/JSX** - Modern JavaScript

## 📁 Project Structure

```
customer-support-dashboard/
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Top header with navigation
│   │   ├── Sidebar.jsx         # Left sidebar navigation
│   │   ├── StatsCard.jsx       # Statistics display card
│   │   ├── Badges.jsx          # Status and priority badges
│   │   ├── SearchInput.jsx     # Search bar component
│   │   ├── FilterDropdown.jsx  # Filter dropdown menus
│   │   ├── TicketTable.jsx     # Desktop table view
│   │   ├── TicketCard.jsx      # Mobile card view
│   │   ├── TicketDetails.jsx   # Ticket details drawer
│   │   ├── Conversation.jsx    # Message conversation view
│   │   ├── LoadingState.jsx    # Loading skeleton screens
│   │   ├── ErrorState.jsx      # Error display component
│   │   └── EmptyState.jsx      # No results display
│   ├── pages/
│   │   └── Dashboard.jsx       # Main dashboard page
│   ├── store/
│   │   └── ticketStore.js      # Zustand ticket store
│   ├── api/
│   │   └── mockApi.js          # Mock API and ticket data
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles with Tailwind
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 16+ and npm 7+

### Steps

1. **Clone/Extract Project**
   ```bash
   cd customer-support-dashboard
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will open automatically at `http://localhost:5173`

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📖 How to Use

### Dashboard Overview
- **View Statistics**: At the top, four cards display total, open, in-progress, and resolved tickets
- **Navigate Tickets**: Browse tickets in table format (desktop) or cards (mobile)
- **Search**: Type in the search bar to find tickets by customer name, email, subject, or description
- **Filter**: Use dropdown filters to filter by status and/or priority
- **Clear Filters**: Click "Clear Filters" to reset all search and filter criteria

### Managing Tickets
1. Click on any ticket in the list to open the details panel
2. View complete customer information and issue details
3. Read the full conversation history between customer and support
4. Change the ticket status using the "Update Status" dropdown
5. Close the panel by clicking the X button or the overlay
6. Dashboard automatically updates - statistics and filtered results reflect the change

### Search & Filter Examples
- **Search only**: Type "payment" to find all payment-related issues
- **Filter only**: Select "High" priority and "Open" status to see urgent tickets
- **Combined**: Search "login" and filter to "In Progress" status to see tickets being worked on

## 🗂 API & Mock Data

### Mock API Structure
The application uses a mock API (`src/api/mockApi.js`) that simulates real API calls with:
- 800ms network delay simulation
- 5% random error chance for testing error states
- 15 realistic support ticket scenarios

### Ticket Data Structure
Each ticket contains:
```javascript
{
  id: Number,
  customer: String,
  customerEmail: String,
  subject: String,
  description: String,
  priority: 'low' | 'medium' | 'high',
  status: 'open' | 'in-progress' | 'resolved',
  createdAt: Date,
  messages: Array // Conversation history
}
```

### Message Structure
```javascript
{
  id: Number,
  sender: String,
  senderType: 'customer' | 'support',
  message: String,
  timestamp: Date
}
```

## 🎛 State Management with Zustand

The `useTicketStore` manages:
- `tickets`: Full list of all tickets
- `filteredTickets`: Tickets after search/filter applied
- `searchQuery`: Current search input
- `statusFilter`: Selected status filter
- `priorityFilter`: Selected priority filter
- `selectedTicket`: Currently viewed ticket
- `loading`: Loading state during fetch
- `error`: Error message if fetch fails

### Key Actions
- `initializeTickets()`: Fetch tickets from API
- `setSearchQuery(query)`: Update search and refilter
- `setStatusFilter(status)`: Update status filter and refilter
- `setPriorityFilter(priority)`: Update priority filter and refilter
- `clearFilters()`: Reset all search and filters
- `updateTicketStatus(id, status)`: Change ticket status and update stats
- `setSelectedTicket(ticket)`: Set active ticket for details view
- `getStatistics()`: Get computed statistics

## 📱 Responsive Design

### Desktop (1024px+)
- Sidebar navigation visible by default
- Full table view with all columns
- Details panel slides in from right as drawer
- Optimized spacing and typography

### Tablet (768px - 1023px)
- Sidebar navigation still available
- Table layout adapted for medium screens
- Touch-friendly button sizes
- Adjusted padding and margins

### Mobile (<768px)
- Collapsible sidebar navigation
- Ticket cards instead of table (no horizontal scroll)
- Details view opens as full-screen modal
- Touch-optimized interactions
- Responsive typography and spacing

## ✅ Quality Assurance Checklist

The application includes:
- ✅ All imports resolved correctly
- ✅ All routes configured
- ✅ Zustand store properly integrated
- ✅ Mock API with realistic data
- ✅ Search functionality working across all fields
- ✅ Status and priority filters working individually and together
- ✅ Status updates reflected in tickets and statistics immediately
- ✅ Ticket details panel fully functional
- ✅ Conversation messages displaying correctly
- ✅ Loading states showing during data fetch
- ✅ Error states with retry capability
- ✅ Empty states for no results
- ✅ Responsive behavior on mobile, tablet, desktop
- ✅ No console errors
- ✅ No unused variables or imports
- ✅ No placeholder TODOs in code
- ✅ Application runs without errors
- ✅ All buttons and interactions are functional

## 🎨 Customization

### Colors
Modify `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: '#3b82f6',
  secondary: '#10b981',
  danger: '#ef4444',
  warning: '#f59e0b',
  info: '#0ea5e9',
}
```

### Add More Tickets
Edit `src/api/mockApi.js` and add more ticket objects to the `mockTickets` array.

### Change Mock API Delay
In `src/api/mockApi.js`, adjust the `delay()` call to change simulated network delay.

### Modify Status/Priority Options
Edit the `statusOptions` and `priorityOptions` arrays in `src/pages/Dashboard.jsx`.

## 🚀 Future Improvements

- Add backend API integration
- Implement user authentication
- Add ticket creation/editing
- Add file attachment support
- Implement real-time updates with WebSockets
- Add ticket assignment features
- Create advanced reporting and analytics
- Add email notification preferences
- Implement ticket templates
- Add SLA tracking and escalation

## 📝 Notes

- The application uses mock data that persists for the session
- Refreshing the page will reset to initial state
- All interactions are instant (no actual backend calls)
- The error state can be triggered by refreshing if random error fires

## 🎓 Learning Outcomes

Building this dashboard demonstrates:
- React component architecture and composition
- State management with Zustand
- Responsive design principles with Tailwind CSS
- Search and filter functionality
- Real-time data updates
- Proper error and loading state handling
- Professional UI/UX patterns
- Accessibility considerations
- Clean, maintainable code structure

---

**Version**: 1.0.0  
**Status**: Production Ready  
**Last Updated**: 2024
