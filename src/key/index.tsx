import React, { Children, PropsWithChildren, ReactElement, ReactNode, useState } from 'react';

interface KeyFunnelStepProps extends PropsWithChildren {name: string}

export const useKeyFunnel = <T extends string>(defaultValue: T): [({ children }: PropsWithChildren) => React.JSX.Element, (props: KeyFunnelStepProps) => React.JSX.Element,  React.Dispatch<React.SetStateAction<T>>] => {
    const [step, setStep] = useState<T>(defaultValue);

    const Step = (props: KeyFunnelStepProps) => {
        return <>{props.children}</>
    }

    const FunnelProvider = ({children}: PropsWithChildren) => {
        const targetStep = Children.toArray(children).find((childStep: ReactNode) => (childStep as ReactElement<KeyFunnelStepProps>).props.name === step)!
        return <>{targetStep}</>
    }

    return [FunnelProvider,Step, setStep]
};