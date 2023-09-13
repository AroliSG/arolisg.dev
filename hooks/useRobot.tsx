import {
    useEffect, useState
} from 'react';

import Paragraph from '@/utils/paragraph.json';
const paragraph: {[index: string]:any} = Paragraph;

const KnownWords = [
    "!projects",
    "!about me",
    "!contact me",
    "!restart"
]

let interval: NodeJS.Timer;
let idx             = 0;
let paragraphId     = 1;
let lastParagraphId = 1;
let frames          = 0;
let whenIsReady     = false;

let lastElement: HTMLParagraphElement;

const jumpLine      = `
                      `;

    // avoid writing multiple lines of the same paragraph
let responsesToggle      = true;

    // end of the paragraph
const getEndOfLine = (
    line: number,
    callback: () => void
) => {
    if (line === (idx-1)) {
        callback();
        idx = 1;
        whenIsReady     = false;
    }
};
    // the right line of the json
const getRightLine = (line: number) => {
    const dt = paragraph[line]
        ?.slice(0, idx)
        ?.replaceAll("*", jumpLine);

    idx += 1;
    return dt;
}

    // logic to create the child element
const createChild = () => {
    const parent    = document.getElementById ("parent_page");
    const newChild  = document.createElement("p");

    parent?.appendChild(newChild);

    return newChild;
}

    // jump line
const JumpLine = () => {
    const jump = createChild ();

    jump.textContent    = "jump to";
    jump.style.opacity  = "0";
}

const useRobot = () => {
    const [getRequest, setRequest]      = useState <any>("");
    const [isWriting, setIsWriting]     = useState(true);

    const EndOfWriting = (line: number, cb?: () => void) => {
       lastElement.textContent = getRightLine (line);

        getEndOfLine(paragraph[line].length, () => {
            responsesToggle = true;
            setRequest ("");
            setIsWriting (false);

            if (cb) cb ();
        });
    }

    useEffect(() => {
        clearInterval (interval)
        interval = setInterval (() => {
            if (getRequest !== "") {

                    // at the first frame of typing we must send the request paragraph to the display
                if (responsesToggle) {
                    setIsWriting (true);
                    responsesToggle = false;

                        // jump a line before the child is created
                    JumpLine ();
                    createChild ()
                        .textContent = "You: " + getRequest + jumpLine;

                        // where the AI writes should be inserted
                    lastElement     = createChild ();
                    whenIsReady     = true;
                }

                    // we must wait for responseToggle to became true before
                    // sending the response
                if (whenIsReady) {
                        // unknown words will get a response paragraph
                        // instantly after we get the request paragraph
                    if(!KnownWords.includes(getRequest)) EndOfWriting(7);

                    else {
                        switch (getRequest) {
                            case '!contact me': return EndOfWriting(8);
                            case '!about me': return EndOfWriting(9);
                            case '!projects':
                                document.getElementById('ProjectsId')?.scrollIntoView ();
                                EndOfWriting(10);
                            break;

                            case '!restart':
                                EndOfWriting(10, () => {
                                    lastParagraphId     = 1;
                                    paragraphId         = 1;
                                    document.getElementById ("parent_page")!.innerHTML = "";
                                });
                            break;
                        }
                    }
                }
            }

            if (paragraphId === lastParagraphId) {
                setIsWriting (true);
                lastElement = createChild();
                lastParagraphId += 1;
            }

            if (paragraphId < 6) {
                lastElement.textContent = getRightLine(paragraphId);
                getEndOfLine(paragraph[paragraphId as 1]?.length, () => paragraphId += 1);
            }

            if (paragraphId === 6) {
                setIsWriting(false);

                    // blocking until is needed again
                lastParagraphId     = 7;
                paragraphId         = 8;
            }
        frames++;
    }, 30);


    return () => clearInterval (interval);
  }, [getRequest]);


    return {
        setRequest,
        isWriting
    };
}

export default useRobot;