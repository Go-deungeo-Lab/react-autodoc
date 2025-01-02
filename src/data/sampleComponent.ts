// 테스트를 위한 샘플데이터 (삭제 예정 !!)
import { ComponentDoc } from '../types';

export const sampleComponent: ComponentDoc = {
    name: 'Button',
    description: 'A customizable button component with various styles and sizes.',
    props: [
        {
            name: 'variant',
            type: '"primary" | "secondary" | "outline"',
            required: true,
            defaultValue: 'primary',
            description: 'The visual style variant of the button',
        },
        {
            name: 'size',
            type: '"small" | "medium" | "large"',
            required: false,
            defaultValue: 'medium',
            description: 'The size of the button',
        },
        {
            name: 'disabled',
            type: 'boolean',
            required: false,
            defaultValue: 'false',
            description: 'Whether the button is disabled',
        },
        {
            name: 'onClick',
            type: '() => void',
            required: true,
            description: 'Function called when the button is clicked',
        },
    ],
};