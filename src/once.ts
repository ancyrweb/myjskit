import { OrNull } from "./types";

const once = <T extends any>(fn: () => T) => {
  let called = false,
    val: OrNull<T> = null;
  return () => {
    if (!called) {
      called = true;
      val = fn();
    }

    return val;
  };
};

export default once;
