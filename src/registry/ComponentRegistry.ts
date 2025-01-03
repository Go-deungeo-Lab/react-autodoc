import React from 'react';

type ComponentRegistry = {
    [key: string]: React.ComponentType<any>;
};

const registry: ComponentRegistry = {};

export const registerComponent = (name: string, component: React.ComponentType<any>) => {
    registry[name] = component;
};

export const getComponent = (name: string) => {
    return registry[name];
};