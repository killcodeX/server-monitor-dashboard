import React from "react";
import { TfiCloud } from "react-icons/tfi";

export default function ServerStatus() {
  return (
    <div className="server-status-container">
      <div className="server-status-heading">
        <TfiCloud />
        <span>Server Status</span>
      </div>
      <div className="server-status">
        <div className="server-status-items">
          <div className="server-status-details">
            <div className="server-name primary">AWS</div>
            <div className="server-value">64</div>
          </div>
          <div className="server-status-values">
            <div className="server-status-wrapper running">
              <span>Running</span>
              <span>60</span>
            </div>
            <div className="server-status-wrapper stopped">
              <span>Stopped</span>
              <span>4</span>
            </div>
          </div>
        </div>
        <div className="server-status-items">
          <div className="server-status-details">
            <div className="server-name warning">Azure</div>
            <div className="server-value">64</div>
          </div>
          <div className="server-status-values">
            <div className="server-status-wrapper running">
              <span>Running</span>
              <span>60</span>
            </div>
            <div className="server-status-wrapper stopped">
              <span>Stopped</span>
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
