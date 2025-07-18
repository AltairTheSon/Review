import React from 'react';
import { useParams } from 'react-router-dom';

const CompanyDetailPage: React.FC = () => {
  const { companyId } = useParams();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="section-title">Company Details</h1>
        <p className="text-gray-300 text-lg">
          Company ID: {companyId}
        </p>
      </div>
      
      <div className="card">
        <p className="text-gray-300">Company detail page coming soon...</p>
      </div>
    </div>
  );
};

export default CompanyDetailPage;