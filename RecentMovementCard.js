import React from 'react';

const RecentMovementCard = () => {
  return (
    <div className="card flex-fill w-100">
      <div className="card-header">
        <h5 className="card-title mb-0">Recent Movement</h5>
      </div>
      <div className="card-body py-3">
        <div className="chart chart-sm">
          <canvas id="chartjs-dashboard-line"></canvas>
        </div>
      </div>
    </div>
  );
};

export default RecentMovementCard;
