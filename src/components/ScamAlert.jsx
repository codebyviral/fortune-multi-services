import React from 'react';

const ScamAlert = () => {
  return (
    <div className="scam-alert-container">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="scam-alert-header">
        <h1>🚨 URGENT SCAM ALERT 🚨</h1>
        <h2>Fortune Multi Services (Owner: Chanti)</h2>
      </div>

      <div className="scam-alert-content">
        <div className="warning-message">
          <p>This individual has <span className="highlight">defrauded clients</span> by taking money and refusing repayment.</p>
          <p>A confirmed case involves <span className="highlight">₹5000 being stolen</span> with no intention of returning it.</p>
        </div>

        <div className="scammer-details">
          <h3>⚠️ DO NOT ENGAGE WITH:</h3>
          <div className="detail-box">
            <p><strong>Website:</strong> <a href="https://fortunemultiservices.in/" target="_blank" rel="noopener noreferrer">fortunemultiservices.in</a></p>
            <p><strong>Phone:</strong> +91 89190 51513</p>
          </div>
        </div>

        <div className="action-steps">
          <h3>🚨 IMMEDIATE ACTIONS RECOMMENDED:</h3>
          <ol>
            <li>Block all communication channels</li>
            <li>Warn others in your network</li>
            <li>Report to local cybercrime authorities if affected</li>
          </ol>
        </div>

        <div className="legal-notice">
          <p>Legal proceedings are being initiated against this fraudulent activity.</p>
          <p>Victims are encouraged to come forward with evidence.</p>
        </div>
      </div>

      <div className="share-prompt">
        <p>Help prevent others from being scammed - Share this warning!</p>
        <div className="share-buttons">
          <button>Copy Message</button>
          <button>Share on WhatsApp</button>
        </div>
      </div>
    </div>
  );
};

export default ScamAlert;