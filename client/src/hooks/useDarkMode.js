import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = initialValue => {
  const [values, setValues] = useLocalStorage("darkMode", initialValue);

  useEffect(() => {
    //if darkMode is true, then we add the class to the body tag, if false, we remove it
    if (!values) {
      document
        .getElementById("dataTable")
        .classList.remove("celled", "inverted", "selectable");
    } else {
      document
        .getElementById("dataTable")
        .classList.add("celled", "inverted", "selectable");
    }
  }, [values]);

  return [values, setValues];
};
