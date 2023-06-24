import React, { PropsWithChildren } from 'react';
interface KeyFunnelStepProps extends PropsWithChildren {
    name: string;
}
export declare const useKeyFunnel: <T extends string>(defaultValue: T) => [({ children }: PropsWithChildren) => React.JSX.Element, (props: KeyFunnelStepProps) => React.JSX.Element, React.Dispatch<React.SetStateAction<T>>];
export {};
