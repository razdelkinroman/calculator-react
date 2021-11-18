import React, { useState } from 'react';
import { Calculator } from './containers';
import { classNames } from './utils/classNames';

import { Mode } from 'models';

function App() {
  const [mode, setMode] = useState<Mode>('light');

  return (
    <div className={classNames(mode, 'flex justify-center mt-10')}>
      <Calculator setMode={setMode} />
    </div>
  );
}

export default App;
