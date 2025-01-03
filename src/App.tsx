import React from 'react';
import { DocumentViewer } from './components/viewer/DocumentViewer';
import { sampleComponent } from './data/sampleComponent';
import { Button } from './components/examples/Button';
import { registerComponent } from './registry/ComponentRegistry';

// Register components
registerComponent('Button', Button);

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <DocumentViewer component={sampleComponent} />
        </div>
    );
}

export default App;