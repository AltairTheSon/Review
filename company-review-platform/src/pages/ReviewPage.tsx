import React from 'react';
import { useParams } from 'react-router-dom';

const ReviewPage: React.FC = () => {
  const { companyId } = useParams();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="section-title">Write a Review</h1>
        <p className="text-gray-300 text-lg">
          Share your experience with this company
        </p>
      </div>
      
      <div className="card">
        <p className="text-gray-300">Review form coming soon... (Company ID: {companyId})</p>
      </div>
    </div>
  );
};

export default ReviewPage;