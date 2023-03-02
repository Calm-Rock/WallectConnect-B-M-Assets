import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f9f9f9', color: '#333', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px' }} className = 'footer-font'>Made with ❤️ by <a href="https://github.com/Calm-Rock" style={{textDecoration:"none"}}>Cheeto</a></p>
      </div>
    </footer>
  );
}

export default Footer;
