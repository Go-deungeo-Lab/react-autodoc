import React, { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { ComponentDoc } from '../../types';
import {Button} from "../examples/Button";

interface ComponentPreviewProps {
    component: ComponentDoc;
    code: string;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({ component, code }) => {
    const codeRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current);
        }
    }, [code]);

    return (
        <div className="mt-8 border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-4 py-2 border-b">
                <h3 className="font-medium">Live Preview</h3>
            </div>

            <div className="p-4">
                <div className="bg-white rounded-lg border p-6 mb-4 flex items-center justify-center">
                    <div className="preview-area">
                        <Button
                            variant="primary"
                            size="medium"
                            onClick={() => alert('Button clicked!')}
                        >
                            Click me
                        </Button>
                    </div>
                </div>

                <div className="bg-gray-800 rounded-lg">
          <pre className="p-4 overflow-x-auto">
            <code ref={codeRef} className="language-jsx text-sm">
              {code}
            </code>
          </pre>
                </div>
            </div>
        </div>
    );
};