import React from 'react';

interface PropControlsProps {
    props: {
        variant: 'primary' | 'secondary' | 'outline';
        size: 'small' | 'medium' | 'large';
        disabled: boolean;
    };
    onChange: (name: string, value: any) => void;
}

export const PropControls: React.FC<PropControlsProps> = ({ props, onChange }) => {
    return (
        <div className="flex flex-col gap-4 p-4 bg-gray-50 rounded-lg">
            {/* Variant 선택 */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    variant
                </label>
                <select
                    value={props.variant}
                    onChange={(e) => onChange('variant', e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="primary">primary</option>
                    <option value="secondary">secondary</option>
                    <option value="outline">outline</option>
                </select>
            </div>

            {/* Size 선택 */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    size
                </label>
                <select
                    value={props.size}
                    onChange={(e) => onChange('size', e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                </select>
            </div>

            {/* Disabled 토글 */}
            <div>
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={props.disabled}
                        onChange={(e) => onChange('disabled', e.target.checked)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">disabled</span>
                </label>
            </div>
        </div>
    );
};