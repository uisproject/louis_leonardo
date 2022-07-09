import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useObserverSelector } from "@/features/useObserver";
import { setIsVisible } from "@/features/useObserver";

export const useObserverHook = (ref) => {
  const dispatch = useDispatch();
  const { options } = useObserverSelector();

  const observerHandler = (entries) => {
    const [entry] = entries;
    dispatch(setIsVisible(entry.isIntersecting));
  };

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(observerHandler, options);
    observer.observe(ref.current);
  }, [ref.current]);
};
