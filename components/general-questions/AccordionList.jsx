"use client";
import AccordionItem from "@/components/general-questions/AccordionItem";
import {useState} from "react";

export default function AccordionList({question}) {
    const [openAcc, setOpenAcc] = useState(null)

    const toggle = (quesId) => {
        setOpenAcc(openAcc === quesId ? null : quesId)
    }
    return (
        <>
            <div className="max-w-5xl m-auto ">
                <h3 className="my-10  text-center tracking-tight text-5xl font-bold ">Frequently
                    Asked Question</h3>
                {
                    question.length > 0 ? (
                        question.map((ques) => (
                            <AccordionItem onToggle={() => toggle(ques.id)} key={ques.id} ques={ques}
                                           openAcc={openAcc}/>
                        ))
                    ) : (<p>There is no FAqs</p>)
                }
            </div>

        </>
    );
};