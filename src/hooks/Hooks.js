/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
export function useIncrement(initialValue = 0, step = 1) {
  const [state, setState] = useState(initialValue);

  const increment = () => {
    setState((state) => state + step);
  };

  return [state, increment];
}

export function useAutoIncrement() {
  const [count, increment] = useIncrement();
  useEffect(() => {
    const timer = window.setInterval(increment, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return count;
}
export function useToggleCompterVisible(initalValue = true) {
  const [value, setCompterVisible] = useState(initalValue);
  const toggle = () => setCompterVisible((value) => !value);
  return [value, toggle];
}

export function useTodos() {
  // On initialise l'Etat du todolist
  const [todos, loading] = useFetchData(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  return [todos, loading];
}
export function usePostComments() {
  const [postcomments, loading] = useFetchData(
    "https://jsonplaceholder.typicode.com/comments?_limit=15"
  );
  return [postcomments, loading];
}
export function useFetchData(url, params = undefined) {
  // On initialise l'Etat du des données à charger en AJAX
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState([]);
  useEffect(() => {
    // On met une fonction asynchrone que l'on va appeler plus tard pour executer les requetes
    (async () => {
      const response = await fetch(url, params);
      const responseData = await response.json();
      if (response.ok) {
        setState((state) => Object.assign(state, responseData));
        setLoading(false);
      }
    })();
  }, []);
  return [state, loading];
}
