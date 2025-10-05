import AccordionList from "@/components/general-questions/AccordionList";
import {question} from "@/utils/question";

export default function Accordion() {

    return (
        <>
            <AccordionList question={question}/>
        </>
    );
};