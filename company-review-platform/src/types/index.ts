export interface Company {
  id: string;
  name: string;
  industry: string[];
  services: string[];
  highlights: string[];
  logo?: string;
  website?: string;
  description?: string;
  founded?: number;
  employees?: string;
  headquarters?: string;
  averageRating: number;
  totalReviews: number;
  competitors: string[];
  trending?: boolean;
  verified?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReviewCriteria {
  value: number; // Value for money
  support: number; // Customer support
  quality: number; // Product/Service quality
  reliability?: number; // Reliability
  usability?: number; // Ease of use
  innovation?: number; // Innovation
}

export interface Review {
  id: string;
  userId: string;
  companyId: string;
  userName: string;
  userAvatar?: string;
  title: string;
  content: string;
  criteria: ReviewCriteria;
  overallRating: number;
  pros: string[];
  cons: string[];
  suggestion?: string;
  media: ReviewMedia[];
  verified: boolean;
  helpful: number;
  notHelpful: number;
  replies: ReviewReply[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ReviewMedia {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  caption?: string;
}

export interface ReviewReply {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin' | 'moderator';
  verified: boolean;
  totalReviews: number;
  helpfulVotes: number;
  joinedAt: Date;
  preferences?: UserPreferences;
}

export interface UserPreferences {
  darkMode: boolean;
  emailNotifications: boolean;
  pushNotifications: boolean;
  language: string;
  industries: string[];
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  color?: string;
  companyCount: number;
  criteria: string[]; // Custom criteria for this industry
}

export interface SearchFilters {
  query?: string;
  industries?: string[];
  rating?: {
    min: number;
    max: number;
  };
  reviewCount?: {
    min: number;
    max: number;
  };
  sortBy?: 'name' | 'rating' | 'reviews' | 'trending' | 'recent';
  sortOrder?: 'asc' | 'desc';
}

export interface ComparisonData {
  companies: Company[];
  criteria: string[];
  ratings: Record<string, Record<string, number>>;
}

export interface Suggestion {
  id: string;
  companyId: string;
  userId: string;
  category: 'feature' | 'improvement' | 'bug' | 'general';
  title: string;
  description: string;
  votes: number;
  status: 'pending' | 'reviewed' | 'implemented' | 'rejected';
  createdAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'review_reply' | 'review_helpful' | 'company_update' | 'system';
  title: string;
  message: string;
  read: boolean;
  actionUrl?: string;
  createdAt: Date;
}

export interface CMSContent {
  id: string;
  type: 'company' | 'industry' | 'announcement' | 'page';
  title: string;
  slug: string;
  content: any; // Sanity block content
  status: 'draft' | 'published' | 'archived';
  author: string;
  tags: string[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
}

export interface AnalyticsData {
  totalCompanies: number;
  totalReviews: number;
  totalUsers: number;
  averageRating: number;
  topIndustries: Array<{
    name: string;
    count: number;
  }>;
  recentActivity: Array<{
    type: string;
    count: number;
    date: string;
  }>;
  popularCompanies: Company[];
  trendingSearches: string[];
}

export interface APIResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

export interface FormState<T> {
  data: T;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isValid: boolean;
}

// Form types
export interface ReviewFormData {
  title: string;
  content: string;
  criteria: ReviewCriteria;
  pros: string[];
  cons: string[];
  suggestion?: string;
  media: File[];
}

export interface CompanyFormData {
  name: string;
  industry: string[];
  services: string[];
  highlights: string[];
  description?: string;
  website?: string;
  logo?: File;
}

export interface UserProfileFormData {
  name: string;
  email: string;
  avatar?: File;
  preferences: UserPreferences;
}

// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  current?: boolean;
  badge?: number;
}

export interface BreadcrumbItem {
  name: string;
  href?: string;
  current?: boolean;
}

// Modal types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

// Toast types
export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    handler: () => void;
  };
}

// Theme types
export interface Theme {
  mode: 'light' | 'dark';
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
  };
}

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps extends BaseComponentProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url';
}

export interface SelectProps extends BaseComponentProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: Array<{
    label: string;
    value: string;
  }>;
  error?: string;
  required?: boolean;
  placeholder?: string;
}

// Route types
export type RouteParams = {
  companyId?: string;
  reviewId?: string;
  userId?: string;
  slug?: string;
};