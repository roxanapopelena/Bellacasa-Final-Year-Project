import React from 'react';
import '../../App.css';
import Download from '../Download';

class DownloadPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
  return (
  <>
  <div className='download'>
      <Download/>
      </div>
  </>
  );
  }
}

export default DownloadPage;
