import React from "react";
import type { PropsWithChildren } from "react";
interface OrderFunnelProps extends PropsWithChildren {
    page: number;
}
export declare const OrderFunnel: ({ page, children }: OrderFunnelProps) => React.JSX.Element;
export {};
