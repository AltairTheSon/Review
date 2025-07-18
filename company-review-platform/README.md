# Company Review Platform

A comprehensive mobile-first company review platform with CMS integration. Users can discover, analyze, and review any company's services/products across all industries.

## 🚀 Features

### Core Features
- **Universal Company Directory**: Searchable grid of companies across industries
- **Dynamic Filtering**: Filter by industry, rating, review count, and more
- **Company Profiles**: Detailed company information with service highlights
- **Universal Review System**: 5-star ratings with industry-agnostic criteria
- **Competitor Comparison**: Auto-suggested similar companies
- **Review Dashboard**: Pros/cons, comments, and improvement suggestions
- **Mobile-First Design**: Responsive design optimized for mobile devices

### User Experience
- **Trending Companies**: Discover popular and trending companies
- **Advanced Search**: Find companies, reviews, and services
- **User Authentication**: Secure login/registration system
- **Profile Management**: User profiles with preferences
- **Review Verification**: Verified review badges
- **Interactive Comments**: Reply to reviews and engage with community

### Admin CMS
- **Company Management**: Add/remove companies and services
- **Review Moderation**: Moderate user-generated content
- **Industry Management**: Manage industry categories
- **Analytics Dashboard**: Track platform performance
- **User Management**: Manage user accounts and permissions

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Query + Context API
- **Animation**: Framer Motion
- **Routing**: React Router v6
- **Forms**: React Hook Form + Yup validation
- **Icons**: Heroicons + Lucide React
- **UI Components**: Headless UI

## 🎨 Design System

### Theme
- **Primary**: Dark mode with gradient backgrounds (#0f172a → #1e3a8a)
- **Accent**: Purple to pink gradient (#8B5CF6 → #EC4899)
- **Typography**: Inter + DM Sans fonts
- **Components**: Rounded cards (14px radius) with neumorphic shadows

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Bottom navigation for mobile

## 📱 Mobile Features

- **Bottom Navigation**: Quick access to main sections
- **Floating Action Button**: Quick review creation
- **Swipe Gestures**: Intuitive navigation
- **Optimized Forms**: Mobile-friendly input fields
- **Touch Interactions**: Smooth animations and feedback

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/company-review-platform.git
cd company-review-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run preview` - Preview production build

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Layout components
│   ├── Navigation/     # Navigation components
│   └── UI/            # UI components
├── contexts/           # React contexts
├── pages/             # Page components
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── styles/            # Global styles
```

## 🎯 Key Components

### Layout System
- **Layout**: Main layout wrapper with sidebar and header
- **Header**: Navigation with search, user menu, and theme toggle
- **Sidebar**: Desktop navigation with company categories
- **MobileNavigation**: Bottom navigation for mobile devices

### Context Providers
- **AuthContext**: User authentication and session management
- **ThemeContext**: Dark/light theme switching
- **ToastContext**: Global notification system

### Page Components
- **HomePage**: Hero section with featured companies
- **CompaniesPage**: Company directory with filtering
- **CompanyDetailPage**: Detailed company information
- **ReviewPage**: Review creation and editing
- **SearchPage**: Advanced search functionality
- **ProfilePage**: User profile management
- **AdminPage**: Admin dashboard and CMS

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended spacing and typography
- Custom component classes
- Animation utilities

### Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=your_api_url
REACT_APP_FIREBASE_CONFIG=your_firebase_config
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify dashboard
3. Configure environment variables

## 📊 Features Roadmap

### Phase 1 (Current)
- ✅ Basic layout and navigation
- ✅ Homepage with featured companies
- ✅ Authentication system
- ✅ Theme switching
- ✅ Mobile-first design

### Phase 2 (Next)
- [ ] Company listing and filtering
- [ ] Company detail pages
- [ ] Review creation and display
- [ ] Search functionality
- [ ] User profiles

### Phase 3 (Future)
- [ ] Admin dashboard
- [ ] CMS integration
- [ ] Analytics and reporting
- [ ] Advanced filtering
- [ ] Social features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern review platforms
- Icons from Heroicons and Lucide React
- Images from Unsplash
- Built with React and Tailwind CSS

## 📞 Support

For support, email support@yourcompany.com or create an issue in the repository.

---

Made with ❤️ for better company reviews
