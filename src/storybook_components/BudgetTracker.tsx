import { useMemo } from "react";
import Slider from "./Slider";

interface BudgetTracker {
    secondValue: string;
    secondChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    secondLockable?: boolean;
    secondLabel: string;
    firstValue: string;
    firstChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    firstLockable?: boolean;
    firstLabel: string;
    min: string;
    max: string;
}

export default function BudgetTracker({secondLabel, secondValue, secondChange, firstLabel, firstValue, firstChange, max, min, firstLockable = false, secondLockable = false} : BudgetTracker) {

    const calcBudget = useMemo(() => {
        return parseInt(secondValue) - parseInt(firstValue);
      }, [secondValue, firstValue])

    return(
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-start justify-center">
                <Slider label={firstLabel} max={max} min={min} value={firstValue} onChange={firstChange} lockable={firstLockable}/>
                <Slider label={secondLabel} max={max} min={min} value={secondValue} onChange={secondChange} lockable={secondLockable}/>
            </div>
      <p>Your remaining budget is: {calcBudget}</p>
    </div>
    )
}