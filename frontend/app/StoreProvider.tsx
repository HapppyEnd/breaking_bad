"use client";
import { AppStote, makeStore } from "@/lib/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({children}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStote>()

    if (!storeRef.current) {
        storeRef.current = makeStore()
    }

    return <Provider store={storeRef.current}>
        {children}
    </Provider>
}