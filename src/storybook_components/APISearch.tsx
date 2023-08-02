import Accordion from "./Accordion";
import InputArea from "./InputArea";
import {ToggleProps} from "../interfaces/InfoProps";
import SvgButton from "./SvgButton";
import { useState } from 'react'
import { ReactComponent as Search } from '../assets/svgs/magnifying-glass-svgrepo-com.svg'
import { ReactComponent as Previous } from '../assets/svgs/left-chevron-svgrepo-com.svg'
import { ReactComponent as Next } from '../assets/svgs/right-chevron-svgrepo-com.svg'

interface APISearchProps {
    apiCall: (x: string, y: number) => ToggleProps[] | undefined,
    width?: string
}

export default function APISearch({apiCall, width = "300px"} : APISearchProps) {

    const [query, setQuery] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const [isOpen, setIsOpen] = useState<number|null>(null);

    let results : ToggleProps[] | undefined = apiCall(query, pageNumber); //questo è la proprietà da uscire

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsOpen(null);
        setPageNumber(1);
    }

    function handleNext() {
        if(query) {
            setPageNumber(prev => prev + 1);
            setIsOpen(null)
        }
    }

    function handlePrevious() {
        if(pageNumber > 1 && query) {
            setPageNumber(prev => prev - 1);
            setIsOpen(null);
        }
    }

    function toggleText(i:number) {
        isOpen === i ? setIsOpen(null) : setIsOpen(i);
        console.log(i)
    }


    return(
        <div className="flex flex-col items-center justify-center" style={{width: `${width}`}}>
            <InputArea className={`bg-surface-container ${pageNumber === 0 ? "" : "border-b border-disabled"}`} label="Search" inputType="input" svg={Search} value={query} setValue={e => setQuery(e.target.value)} handleSubmit={handleSubmit} width={width}/>
            <Accordion infos={results} upperState={isOpen} upperSetState={toggleText} width={width} compressed={true}/>
            <div className={`flex items-center justify-center bg-surface-container border-t border-disabled w-full ${pageNumber === 0 ? "hidden" : ""}`}>
                <SvgButton label="Previous page" svg={Previous} onClick={handlePrevious}/>
                {pageNumber}
                <SvgButton label="Next page" svg={Next}onClick={handleNext}/>
            </div>
        </div>
    )
}