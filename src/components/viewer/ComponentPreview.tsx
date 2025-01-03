// src/components/viewer/ComponentPreview.tsx
import React, { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { ComponentDoc } from '../../types';
import { Button } from '../examples/Button';
import { PropControls } from './PropControls';

interface ComponentPreviewProps {
    component: ComponentDoc;
    code: string;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({ component, code: initialCode }) => {
    const codeRef = useRef<HTMLElement>(null);
    const [props, setProps] = useState({
        variant: 'primary' as const,
        size: 'medium' as const,
        disabled: false
    });

    const [code, setCode] = useState(initialCode);

    const handlePropChange = (name: string, value: any) => {
        setProps(prev => ({
            ...prev,
            [name]: value
        }));

        // 코드 업데이트
        const newCode = `<Button\n  variant="${props.variant}"\n  size="${props.size}"${props.disabled ? '\n  disabled' : ''}\n  onClick={() => alert('Button clicked!')}\n>\n  Click me\n</Button>`;
        setCode(newCode);
    };

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current);
        }
    }, [code]);

    return (
        <div className="mt-8 border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-2 border-b">
                <h3 className="font-medium">Live Preview</h3>
            </div>

            <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                    {/* Props 컨트롤 */}
                    <div>
                        <PropControls props={props} onChange={handlePropChange} />
                    </div>

                    {/* 컴포넌트 미리보기 */}
                    <div className="bg-white rounded-lg border p-6 flex items-center justify-center">
                        <Button
                            variant={props.variant}
                            size={props.size}
                            disabled={props.disabled}
                            onClick={() => alert('Button clicked!')}
                        >
                            Click me
                        </Button>
                    </div>
                </div>

                {/* 코드 미리보기 */}
                <div className="mt-4 bg-gray-800 rounded-lg">
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