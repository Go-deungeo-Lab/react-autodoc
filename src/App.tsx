// src/App.tsx
import React from 'react';
import { DocumentViewer } from './components/viewer/DocumentViewer';
import { sampleComponent } from './data/sampleComponent';

function App() {
  return (
      <div className="min-h-screen bg-gray-50">
        <DocumentViewer component={sampleComponent} />
      </div>
  );
}

export default App;