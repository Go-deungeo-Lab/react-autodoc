export interface PropDefinition {
    name: string;
    type: string;
    required: boolean;
    defaultValue?: any;
    description?: string;
}

export interface ComponentDoc {
    name: string;
    description?: string;
    props: PropDefinition[];
    examples: CodeExample[];
}

export interface CodeExample {
    code: string;
    description?: string;
}