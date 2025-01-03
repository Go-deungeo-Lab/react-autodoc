import React from 'react';
import { ComponentDoc } from '../../types';

interface ComponentPreviewProps {
    component: ComponentDoc;
    code: string;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({ component, code }) => {
    return (
        <div className="mt-8 border rounded-lg overflow-hidden">
            {/* Preview Header */}
            <div className="bg-gray-50 px-4 py-2 border-b">
                <h3 className="font-medium">Live Preview</h3>
            </div>

            {/* Preview Content */}
            <div className="p-4">
                <div className="bg-white rounded-lg border p-6 mb-4">
                    {/* 실제 컴포넌트가 렌더링될 공간 */}
                    <div className="preview-area">
                        {/* TODO: 동적 컴포넌트 렌더링 구현 */}
                    </div>
                </div>

                {/* Code Section */}
                <div className="bg-gray-800 rounded-lg p-4">
          <pre className="text-gray-300 overflow-x-auto">
            <code>{code}</code>
          </pre>
                </div>
            </div>
        </div>
    );
};