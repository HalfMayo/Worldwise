import { ChildrenProps } from "../interfaces/ChildrenProps"

interface TooltipProps extends ChildrenProps {
    title: string
}

export default function Tooltip({children, title} : TooltipProps) {
    return(
        <div className="relative group">
            {children}
            <span className="absolute top-[50%] translate-y-[-50%] left-14 invisible bg-surface-container px-2 py-1.5 rounded-md group-hover:visible">{title}</span>
        </div>
    )
}