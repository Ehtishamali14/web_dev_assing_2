// StatsCard.js
import React from 'react';


const StatsCard = ({ title, value, change, icon, isPositive }) => (
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col mt-0">
            <h5 className="card-title">{title}</h5>
          </div>
          <div className="col-auto">
            <div className={`stat ${isPositive ? 'text-success' : 'text-danger'}`}>
              <i className="align-middle" data-feather={icon}></i>
            </div>
          </div>
        </div>
        <h1 className="mt-1 mb-3">{value}</h1>
        <div className="mb-0">
          <span className={isPositive ? 'text-success' : 'text-danger'}>
            <i className="mdi mdi-arrow-bottom-right"></i> {change}
          </span>
          <span className="text-muted">Since last week</span>
        </div>
      </div>
    </div>
  </div>
);

export default StatsCard;
