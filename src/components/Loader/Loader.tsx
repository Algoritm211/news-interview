import React from 'react';

const Loader:React.FC = () => {
  return (
    <div className="ui active inverted dimmer" style={{height: '100vh'}}>
      <div className="ui large text loader">Loading</div>
    </div>
  );
};

export default Loader;
