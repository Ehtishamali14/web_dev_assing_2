// DashboardContent.js
import React from 'react';
import StatsCard from './StatsCard';


const DashboardContent = () => (
  <main className="content">
    <div className="row">
      <StatsCard title="Sales" value="2.382" change="-3.65%" icon="truck" isPositive={false} />
      <StatsCard title="Visitors" value="14.212" change="5.25%" icon="users" isPositive={true} />
      {/* Additional stats can be added here */}
    </div>
  </main>
);

export default DashboardContent;
