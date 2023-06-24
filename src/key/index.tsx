import React, { Children, PropsWithChildren, ReactElement, ReactNode, useState } from 'react';

interface KeyFunnelStepProps extends PropsWithChildren {name: string}

export const useKeyFunnel = <T extends string>() => {
    const [step, setStep] = useState<T>();

    const Step = (props: KeyFunnelStepProps) => {
        return <>{props.children}</>
    }

    const FunnelProvider = ({children}: PropsWithChildren) => {
        const targetStep = Children.toArray(children).find((childStep: ReactNode) => (childStep as ReactElement<KeyFunnelStepProps>).props.name === step)!
        return Object.assign(targetStep, {Step})
    }

    return [FunnelProvider, setStep]
};