import React from 'react';

const BrowserUsageCard = () => {
  return (
    <div className="card flex-fill w-100">
      <div className="card-header">
        <h5 className="card-title mb-0">Browser Usage</h5>
      </div>
      <div className="card-body d-flex">
        <div className="align-self-center w-100">
          <div className="py-3">
            <div className="chart chart-xs">
              <canvas id="chartjs-dashboard-pie"></canvas>
            </div>
          </div>
          <table className="table mb-0">
            <tbody>
              <tr>
                <td>Chrome</td>
                <td className="text-end">4306</td>
              </tr>
              <tr>
                <td>Firefox</td>
                <td className="text-end">3801</td>
              </tr>
              <tr>
                <td>IE</td>
                <td className="text-end">1689</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BrowserUsageCard;
