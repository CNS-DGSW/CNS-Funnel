import React, {Children,  useEffect, useState } from "react"
import type { PropsWithChildren, ReactNode } from "react"

interface OrderFunnelProps extends PropsWithChildren {page: number}

export const OrderFunnel = ({ page, children }: OrderFunnelProps) => {
  const [currentComponent, setCurrentComponent] =
    useState<Exclude<ReactNode, boolean | null | undefined>>()

  useEffect(() => {
    setCurrentComponent(Children.toArray(children)[page - 1])
  }, [page])

  return <>{currentComponent}</>
}
