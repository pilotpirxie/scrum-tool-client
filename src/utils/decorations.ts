import {useMemo} from "react";

const isChristmasTime = () => new Date().getMonth() === 11 && new Date().getDate() > 14;

const useChristmasDecoration = () => useMemo(() => isChristmasTime(), [])

export default useChristmasDecoration;