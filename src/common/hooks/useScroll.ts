import {useState, useEffect} from "react";

interface useScrollProps {
    max: number;
}

export const useScroll = ({max}: useScrollProps) => {
    const [state, setState] = useState<number>(0);
    const onScroll = () => {
        setState(Math.min(window.scrollY, max));
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
};