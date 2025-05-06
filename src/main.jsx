import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#ff0000',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: '900',
      zIndex: 9999,
      animation: 'pulse 0.5s infinite alternate',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        fontSize: '2rem',
        marginBottom: '2rem',
        textShadow: '0 0 10px black'
      }}>⚠️ WARNING ⚠️</div>
      
      <div style={{ maxWidth: '800px', lineHeight: '1.5' }}>
        <span style={{ borderBottom: '3px solid white' }}>YOU OWE 5000 RS</span>
        <br/><br/>
        This is your FINAL NOTICE! Payment is <u>OVERDUE</u>!
        <br/><br/>
        We KNOW WHERE YOU ARE. This message will NOT GO AWAY until you PAY.
        <br/><br/>
        <div style={{
          backgroundColor: 'black',
          color: 'yellow',
          padding: '10px',
          borderRadius: '5px',
          display: 'inline-block'
        }}>
          PAY TODAY OR FACE CONSEQUENCES!
        </div>
      </div>
    </div>

    <style>{`
      @keyframes pulse {
        from { background-color: #ff0000; }
        to { background-color: #cc0000; }
      }
    `}</style>
  </StrictMode>
);