import React from 'react';

const RealTimeMapCard = () => {
  return (
    <div className="card flex-fill w-100">
      <div className="card-header">
        <h5 className="card-title mb-0">Real-Time</h5>
      </div>
      <div className="card-body px-4">
        <div id="world_map" style={{ height: '350px' }}></div>
      </div>
    </div>
  );
};

export default RealTimeMapCard;
