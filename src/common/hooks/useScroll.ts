import {useState, useEffect} from "react";

interface useScrollProps {
    max: number;
}

export const useScroll = ({max}: useScrollProps) => {
    const [state, setState] = useState<number>(0);

    useEffect(() => {
        const onScroll = () => {
            setState(Math.min(window.scrollY, max));
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [max]);
    return state;
};