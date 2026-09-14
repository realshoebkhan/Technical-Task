# Customer Support Dashboard - Modular Architecture

## 📁 New Project Structure

The project has been reorganized into a **modular, scalable architecture** with clear separation of concerns.

```
customer-support-dashboard/
│
├── public/
│
├── src/
│   │
│   ├── assets/                 # Static assets (images, icons, etc.)
│   │
│   ├── components/             # Reusable UI components
│   │   ├── layout/
│   │   │   ├── DashboardLayout.jsx    # Main layout container
│   │   │   ├── Header.jsx             # Top navigation bar
│   │   │   └── Sidebar.jsx            # Left sidebar navigation
│   │   │
│   │   ├── dashboard/          # Dashboard-specific components
│   │   │   ├── StatsCard.jsx         # Statistics display card
│   │   │   ├── TicketToolbar.jsx     # Search & filter toolbar
│   │   │   ├── TicketTable.jsx       # Desktop table view
│   │   │   └── TicketCard.jsx        # Mobile card view
│   │   │
│   │   ├── ticket/             # Ticket-specific components
│   │   │   ├── TicketDetails.jsx     # Ticket details drawer/modal
│   │   │   ├── TicketStatus.jsx      # Status badge & selector
│   │   │   ├── PriorityBadge.jsx     # Priority badge
│   │   │   └── Conversation.jsx      # Message conversation display
│   │   │
│   │   └── common/             # Shared/common components
│   │       ├── LoadingState.jsx      # Loading skeleton screens
│   │       ├── ErrorState.jsx        # Error message display
│   │       ├── EmptyState.jsx        # No results message
│   │       └── FilterDropdown.jsx    # Reusable dropdown filter
│   │
│   ├── pages/                  # Page-level components
│   │   └── Dashboard.jsx            # Main dashboard page
│   │
│   ├── store/                  # State management
│   │   └── ticketStore.js           # Zustand ticket store
│   │
│   ├── services/               # API & business logic
│   │   └── ticketApi.js             # Ticket API layer
│   │
│   ├── data/                   # Static data & seeds
│   │   └── mockTickets.js           # Mock ticket data (15 tickets)
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── useTickets.js            # Custom hook for ticket management
│   │
│   ├── utils/                  # Utility functions
│   │   └── ticketUtils.js           # Helper functions & utilities
│   │
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles (Tailwind imports)
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🏗️ Architecture Overview

### Component Organization Strategy

#### **1. Layout Components** (`components/layout/`)
- **Purpose**: Global page structure and navigation
- **Reusability**: Used once per page layout
- **Files**:
  - `DashboardLayout.jsx` - Main container that combines Header + Sidebar
  - `Header.jsx` - Top navigation with logo and user profile
  - `Sidebar.jsx` - Left navigation menu

#### **2. Dashboard Components** (`components/dashboard/`)
- **Purpose**: Dashboard-specific UI elements
- **Reusability**: High - used throughout dashboard
- **Files**:
  - `StatsCard.jsx` - Statistics display card (Total, Open, In Progress, Resolved)
  - `TicketToolbar.jsx` - Combined search and filter toolbar
  - `TicketTable.jsx` - Desktop table view for tickets
  - `TicketCard.jsx` - Mobile card view for tickets

#### **3. Ticket Components** (`components/ticket/`)
- **Purpose**: Ticket-specific functionality
- **Reusability**: Medium - focused on ticket operations
- **Files**:
  - `TicketDetails.jsx` - Ticket details drawer/modal
  - `TicketStatus.jsx` - Status badge and selector dropdown
  - `PriorityBadge.jsx` - Priority badge display
  - `Conversation.jsx` - Message conversation timeline

#### **4. Common Components** (`components/common/`)
- **Purpose**: Shared components used across features
- **Reusability**: Very high - generic, reusable utilities
- **Files**:
  - `FilterDropdown.jsx` - Generic dropdown filter
  - `LoadingState.jsx` - Loading skeleton screens
  - `ErrorState.jsx` - Error message display
  - `EmptyState.jsx` - No results message

### State Management (`store/`)

**Zustand Store** (`ticketStore.js`):
- Centralized ticket state management
- Actions: fetch, update, filter, search
- State: tickets, filters, selected ticket, loading/error states
- Uses utility functions from `utils/ticketUtils.js`

### Services Layer (`services/`)

**Ticket API** (`ticketApi.js`):
- Simulates backend API calls
- Handles network delay simulation
- Random error simulation (5% chance)
- Uses mock data from `data/mockTickets.js`

### Data Layer (`data/`)

**Mock Tickets** (`mockTickets.js`):
- 15 realistic support ticket examples
- Includes customer info, messages, metadata
- Separated from API logic for reusability

### Custom Hooks (`hooks/`)

**useTickets Hook** (`useTickets.js`):
- Encapsulates Zustand store usage
- Provides high-level API to components
- Initializes tickets on mount
- Calculates derived state (statistics, filters active)
- **Benefits**:
  - Cleaner component code
  - Easier to test
  - Reusable across multiple pages
  - Separates logic from UI

### Utilities (`utils/`)

**Ticket Utilities** (`ticketUtils.js`):
- `getStatusColor()` - Map status to Tailwind classes
- `getPriorityColor()` - Map priority to Tailwind classes
- `formatDate()` / `formatDateTime()` - Date formatting
- `getInitials()` - Extract initials from name
- `filterTickets()` - Apply search/filter logic
- `calculateStatistics()` - Compute stats from tickets

## 🔄 Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      App.jsx                                │
│                 (Entry Point)                               │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
         ┌───────────────────────────────┐
         │    DashboardLayout            │
         │  (Layout + Header + Sidebar)  │
         └────────────────┬──────────────┘
                          │
                          ▼
                  ┌──────────────────┐
                  │  Dashboard Page  │
                  │   (useTickets)   │
                  └────────┬─────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
    ┌─────────┐      ┌──────────┐      ┌───────────┐
    │  Stats  │      │ Toolbar  │      │ Tickets   │
    │ Cards   │      │ (Search/ │      │ (Table/   │
    │         │      │ Filter)  │      │  Cards)   │
    └─────────┘      └──────────┘      └───────────┘
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                           ▼
        ┌──────────────────────────────┐
        │    useTickets Hook           │
        │  (State + Logic)             │
        └──────────────┬───────────────┘
                       │
                       ▼
        ┌──────────────────────────────┐
        │   useTicketStore (Zustand)   │
        │  • tickets: []               │
        │  • filteredTickets: []       │
        │  • loading, error            │
        │  • search, filters           │
        └──────────────┬───────────────┘
                       │
                       ▼
        ┌──────────────────────────────┐
        │   Services & Utils           │
        │  • ticketApi.js              │
        │  • ticketUtils.js            │
        └──────────────┬───────────────┘
                       │
                       ▼
        ┌──────────────────────────────┐
        │   Data Layer                 │
        │  • mockTickets.js            │
        └──────────────────────────────┘
```

## 🎯 Key Architectural Benefits

### 1. **Separation of Concerns**
- Layout components separate from business logic
- UI components separate from state management
- API logic separate from data
- Utilities separate from components

### 2. **Reusability**
- Common components can be used anywhere
- Utilities can be imported across project
- Custom hooks encapsulate recurring patterns
- Services provide consistent API interface

### 3. **Scalability**
- Easy to add new components in correct directories
- Clear patterns for where code should live
- Growing codebase remains organized
- Easy to locate and maintain code

### 4. **Testability**
- Isolated components are easier to test
- Utils can be unit tested independently
- Custom hooks can be tested in isolation
- Services can be mocked easily

### 5. **Maintainability**
- Clear file organization makes code easy to find
- Related code is grouped together
- Changes localized to relevant directories
- Reduces cognitive load when working with code

## 📋 Component Dependencies Map

```
App.jsx
  └── DashboardLayout
        ├── Header
        └── Sidebar
  └── Dashboard (Page)
        ├── useTickets (Hook)
        │   └── ticketStore (Zustand)
        │       └── ticketUtils (Utils)
        ├── StatsCard (Dashboard)
        ├── TicketToolbar (Dashboard)
        │   └── FilterDropdown (Common)
        ├── TicketTable (Dashboard)
        │   ├── StatusBadge (Ticket)
        │   └── PriorityBadge (Ticket)
        ├── TicketCard (Dashboard) [Mobile]
        │   ├── StatusBadge (Ticket)
        │   └── PriorityBadge (Ticket)
        ├── TicketDetails (Ticket)
        │   ├── StatusSelector (Ticket)
        │   ├── PriorityBadge (Ticket)
        │   └── Conversation (Ticket)
        ├── LoadingState (Common)
        ├── ErrorState (Common)
        └── EmptyState (Common)
```

## 🔧 Adding New Features

### Example: Adding a New Filter Component

1. **Create component** in `components/dashboard/` or `components/common/`
2. **Import** utilities from `utils/ticketUtils.js` if needed
3. **Use** `useTickets` hook for state
4. **Add** to Dashboard.jsx

### Example: Adding API Endpoint

1. **Create function** in `services/ticketApi.js`
2. **Use data** from `data/mockTickets.js` if mocking
3. **Dispatch** action from `store/ticketStore.js`
4. **Call** via `useTickets` hook in components

### Example: Adding Utility Function

1. **Create function** in `utils/ticketUtils.js`
2. **Export** the function
3. **Import** in components/hooks where needed
4. **Use** as needed

## 📦 Import Patterns

### From Components
```javascript
import DashboardLayout from '../components/layout/DashboardLayout';
import StatsCard from '../components/dashboard/StatsCard';
import { StatusBadge } from '../components/ticket/TicketStatus';
import LoadingState from '../components/common/LoadingState';
```

### From Hooks
```javascript
import { useTickets } from '../hooks/useTickets';
```

### From Utils
```javascript
import { getInitials, formatDate } from '../utils/ticketUtils';
```

### From Store
```javascript
import { useTicketStore } from '../store/ticketStore';
```

### From Services
```javascript
import { fetchTickets } from '../services/ticketApi';
```

### From Data
```javascript
import { mockTickets } from '../data/mockTickets';
```

## 🚀 Performance Considerations

1. **Code Splitting**: Components in separate files allow for better tree-shaking
2. **Lazy Loading**: Can easily add React.lazy() for route-based components
3. **Memoization**: Utils are pure functions, suitable for useMemo()
4. **Zustand**: Minimal re-renders compared to Redux
5. **Custom Hooks**: Encapsulate subscriptions, reduce component complexity

## 🔄 Development Workflow

1. **Adding Feature**:
   - Create component in appropriate subdirectory
   - Use existing hooks/utils
   - Add logic to store if needed
   - Import and use in page

2. **Debugging**:
   - Clear component responsibility helps locate bugs
   - Check data flow through hooks
   - Inspect store state in React DevTools
   - Test utilities in isolation

3. **Refactoring**:
   - Extract logic to utilities
   - Extract UI to components
   - Extract state management patterns to custom hooks
   - Extract duplicate imports to barrel exports (optional)

---

**Architecture Version**: 2.0 (Modular)  
**Last Updated**: 2024  
**Status**: Production Ready ✅
