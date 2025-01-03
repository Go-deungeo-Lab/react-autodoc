import React from 'react';
import { ComponentDoc } from '../../types';
import { PropTable } from './PropTable';
import { ComponentPreview } from './ComponentPreview';

interface DocumentViewerProps {
    component: ComponentDoc;
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({ component }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{component.name}</h1>
            {component.description && (
                <p className="text-gray-600 mb-6">{component.description}</p>
            )}

            {/* Examples Section */}
            {component.examples.map((example, index) => (
                <ComponentPreview
                    key={index}
                    component={component}
                    code={example.code}
                />
            ))}

            {/* Props Table */}
            <PropTable props={component.props} />
        </div>
    );
};