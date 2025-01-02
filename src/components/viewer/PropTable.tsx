import React from 'react';
import { PropDefinition } from '../../types';

interface PropTableProps {
    props: PropDefinition[];
}

export const PropTable: React.FC<PropTableProps> = ({ props }) => {
    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Props</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Required</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {props.map((prop) => (
                        <tr key={prop.name}>
                            <td className="px-6 py-4 whitespace-nowrap font-medium">{prop.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{prop.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                {prop.required ? 'Yes' : 'No'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                {prop.defaultValue ?? '-'}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {prop.description ?? '-'}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};