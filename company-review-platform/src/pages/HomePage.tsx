import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  StarIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { Company } from '../types';

// Mock data for demonstration
const featuredCompanies: Company[] = [
  {
    id: '1',
    name: 'TechCorp Solutions',
    industry: ['Technology', 'Software'],
    services: ['Cloud Computing', 'AI Solutions', 'Data Analytics'],
    highlights: ['24/7 Support', 'Enterprise Grade', 'Global Presence'],
    averageRating: 4.8,
    totalReviews: 1247,
    competitors: ['CompetitorA', 'CompetitorB'],
    trending: true,
    verified: true,
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'FinanceFirst Bank',
    industry: ['Finance', 'Banking'],
    services: ['Personal Banking', 'Business Loans', 'Investment Services'],
    highlights: ['Secure Transactions', 'Low Fees', 'Mobile Banking'],
    averageRating: 4.5,
    totalReviews: 892,
    competitors: ['Bank A', 'Bank B'],
    trending: true,
    verified: true,
    logo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    name: 'RetailMax Store',
    industry: ['Retail', 'E-commerce'],
    services: ['Online Shopping', 'Same-day Delivery', 'Customer Support'],
    highlights: ['Fast Shipping', 'Easy Returns', 'Wide Selection'],
    averageRating: 4.3,
    totalReviews: 2156,
    competitors: ['Retailer X', 'Retailer Y'],
    trending: false,
    verified: true,
    logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const stats = [
  { label: 'Companies Reviewed', value: '10,000+', icon: BuildingOfficeIcon },
  { label: 'User Reviews', value: '250,000+', icon: StarIcon },
  { label: 'Active Users', value: '50,000+', icon: UserGroupIcon },
  { label: 'Industries Covered', value: '25+', icon: ChartBarIcon }
];

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [trendingSearches] = useState([
    'Cloud Services', 'Banking', 'E-commerce', 'Healthcare', 'Education'
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search page
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="floating-shapes">
          <motion.div
            animate={{ 
              y: [-20, 20, -20],
              rotate: [0, 180, 360] 
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="floating-shape top-20 left-10 w-16 h-16 bg-accent-purple/20 rounded-full"
          />
          <motion.div
            animate={{ 
              y: [20, -20, 20],
              rotate: [360, 180, 0] 
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="floating-shape top-32 right-16 w-12 h-12 bg-accent-pink/20 rounded-lg"
          />
          <motion.div
            animate={{ 
              y: [-15, 15, -15],
              x: [-10, 10, -10]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="floating-shape bottom-20 left-20 w-20 h-20 bg-primary-500/20 rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Discover & Review
            <span className="gradient-text block">Any Company</span>
          </h1>
          <p className="hero-subtitle">
            The ultimate platform to find, analyze, and review companies across all industries. 
            Make informed decisions with real user experiences and comprehensive insights.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSearch} className="relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search companies, services, or industries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-card/80 backdrop-blur-sm border border-gray-600 rounded-card px-14 py-4 text-white placeholder-gray-400 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 transition-all duration-300 text-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-primary px-6 py-2"
            >
              Search
            </button>
          </form>

          {/* Trending Searches */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm mb-3">Trending searches:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {trendingSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => setSearchQuery(search)}
                  className="tag hover:bg-accent-purple/30 transition-colors duration-300"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="stats-grid"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="stat-card"
            >
              <stat.icon className="h-8 w-8 text-accent-purple mx-auto mb-3" />
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Companies */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured Companies</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover trending companies and read authentic reviews from real users
          </p>
        </motion.div>

        <div className="company-grid">
          {featuredCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/company/${company.id}`} className="company-card group">
                {company.trending && (
                  <div className="trending-badge">
                    <SparklesIcon className="h-3 w-3 mr-1" />
                    Trending
                  </div>
                )}
                
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-16 h-16 rounded-card object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-purple transition-colors duration-300">
                      {company.name}
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {company.industry.slice(0, 2).map((ind) => (
                        <span key={ind} className="industry-badge">
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    {renderStars(company.averageRating)}
                  </div>
                  <span className="text-white font-medium">
                    {company.averageRating}
                  </span>
                  <span className="text-gray-400 text-sm">
                    ({company.totalReviews} reviews)
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {company.highlights.slice(0, 3).map((highlight) => (
                    <div key={highlight} className="text-gray-300 text-sm">
                      • {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {company.services.slice(0, 2).map((service) => (
                    <span key={service} className="tag-secondary">
                      {service}
                    </span>
                  ))}
                  {company.services.length > 2 && (
                    <span className="tag-secondary">
                      +{company.services.length - 2} more
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/companies" className="btn-primary">
            View All Companies
          </Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Share Your Experience?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Help others make informed decisions by sharing your honest review. 
            Your experience matters and can help improve services for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/companies" className="btn-primary">
              Write a Review
            </Link>
            <Link to="/search" className="btn-secondary">
              Explore Companies
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;