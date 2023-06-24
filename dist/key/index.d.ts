import React, { PropsWithChildren } from 'react';
interface KeyFunnelStepProps extends PropsWithChildren {
    name: string;
}
export declare const useKeyFunnel: <T extends string>() => ((({ children }: PropsWithChildren) => (string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal) & {
    Step: (props: KeyFunnelStepProps) => React.JSX.Element;
}) | React.Dispatch<React.SetStateAction<T | undefined>>)[];
export {};
