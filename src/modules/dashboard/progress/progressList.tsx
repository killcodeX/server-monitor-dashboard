import React from "react";

export default function ProgressList() {
  return (
    <div className="progress-details-lists">
      <div className="progress-details-lists-running">
        <div className="progress-details-list-running">
          <div className="progress-details-lists-running-label success">
            Start
          </div>
          <div className="progress-details-lists-running-value">20</div>
        </div>
        <div className="progress-details-list-running">
          <div className="progress-details-lists-running-label">Error</div>
          <div className="progress-details-lists-running-value">3</div>
        </div>
        <div className="progress-details-list-running">
          <div className="progress-details-lists-running-label">Success</div>
          <div className="progress-details-lists-running-value">87%</div>
        </div>
      </div>
      <div className="progress-details-lists-stop">
        <div className="progress-details-list-stop">
          <div className="progress-details-lists-stop-label danger">Stop</div>
          <div className="progress-details-lists-stop-value">20</div>
        </div>
        <div className="progress-details-list-stop">
          <div className="progress-details-lists-stop-label">Error</div>
          <div className="progress-details-lists-stop-value">20</div>
        </div>
        <div className="progress-details-list-stop">
          <div className="progress-details-lists-stop-label">Success</div>
          <div className="progress-details-lists-stop-value">88%</div>
        </div>
      </div>
    </div>
  );
}
