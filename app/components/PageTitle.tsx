import {ReactNode} from "react";

export default function PageTitle({children}: {children: ReactNode}) {
    return (
        <div className={"text-3xl md:text-4xl text-center bg-slate-100 p-8 font-display text-slate-700 font-semibold"}>
            {children}
        </div>
    )
}