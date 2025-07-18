import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { motion } from 'framer-motion';

// Layout Components
import Layout from './components/Layout/Layout';
import MobileNavigation from './components/Navigation/MobileNavigation';

// Pages
import HomePage from './pages/HomePage';
import CompaniesPage from './pages/CompaniesPage';
import CompanyDetailPage from './pages/CompanyDetailPage';
import ReviewPage from './pages/ReviewPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import AdminPage from './pages/AdminPage';

// Providers
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <ToastProvider>
            <Router>
              <div className="min-h-screen bg-gradient-primary">
                <Layout>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/companies" element={<CompaniesPage />} />
                      <Route path="/company/:companyId" element={<CompanyDetailPage />} />
                      <Route path="/company/:companyId/review" element={<ReviewPage />} />
                      <Route path="/search" element={<SearchPage />} />
                      <Route path="/profile" element={<ProfilePage />} />
                      <Route path="/admin" element={<AdminPage />} />
                    </Routes>
                  </motion.div>
                </Layout>
                <MobileNavigation />
              </div>
            </Router>
          </ToastProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
