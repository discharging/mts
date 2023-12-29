// Import necessary hooks and components from React and react-swipeable
import { useReducer, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

// Helper function to calculate the index of the previous item in a circular manner
function previous(length, current) {
  return (current - 1 + length) % length;
}

// Helper function to calculate the index of the next item in a circular manner
function next(length, current) {
  return (current + 1) % length;
}

// Helper function to calculate the threshold for swipe gestures
function threshold(target) {
  const width = target.clientWidth;
  return width / 3;
}

// Constants for transition time and cubic-bezier timing functions
const transitionTime = 400;
const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
const smooth = `transform ${transitionTime}ms ease`;

// Initial state for the carousel
const initialCarouselState = {
  offset: 0,
  desired: 0,
  active: 0,
};

// Reducer function to handle carousel state transitions
function carouselReducer(state, action) {
  switch (action.type) {
    case "jump":
      return {
        ...state,
        desired: action.desired,
      };
    case "next":
      return {
        ...state,
        desired: next(action.length, state.active),
      };
    case "prev":
      return {
        ...state,
        desired: previous(action.length, state.active),
      };
    case "done":
      return {
        ...state,
        offset: NaN,
        active: state.desired,
      };
    case "drag":
      return {
        ...state,
        offset: action.offset,
      };
    default:
      return state;
  }
}

// Helper function to handle swipe gestures
function swiped(e, dispatch, length, dir) {
  const t = threshold(e.event.target);
  const d = dir * e.deltaX;

  if (d >= t) {
    dispatch({
      type: dir > 0 ? "next" : "prev",
      length,
    });
  } else {
    dispatch({
      type: "drag",
      offset: 0,
    });
  }
}

// Custom hook to provide carousel functionality
export function useCarousel(length, interval) {
  // Use reducer to manage state transitions
  const [state, dispatch] = useReducer(carouselReducer, initialCarouselState);

  // Set up swipe handlers using the useSwipeable hook
  const handlers = useSwipeable({
    onSwiping(e) {
      dispatch({
        type: "drag",
        offset: -e.deltaX,
      });
    },
    onSwipedLeft(e) {
      swiped(e, dispatch, length, 1);
    },
    onSwipedRight(e) {
      swiped(e, dispatch, length, -1);
    },
    trackMouse: true,
    trackTouch: true,
  });

  // Set up effect to automatically transition to the next item at specified interval
  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: "next", length }), interval);
    return () => clearTimeout(id);
  }, [state.offset, state.active]);

  // Set up effect to finalize the transition after the specified transition time
  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: "done" }), transitionTime);
    return () => clearTimeout(id);
  }, [state.desired]);

  // Define the style for the carousel container
  const style = {
    transform: "translateX(0)",
    width: `${100 * (length + 2)}%`,
    left: `-${(state.active + 1) * 100}%`,
  };

  // Update style based on state for smooth transitions
  if (state.desired !== state.active) {
    const dist = Math.abs(state.active - state.desired);
    const pref = Math.sign(state.offset || 0);
    const dir =
      (dist > length / 2 ? 1 : -1) * Math.sign(state.desired - state.active);
    const shift = (100 * (pref || dir)) / (length + 2);
    style.transition = smooth;
    style.transform = `translateX(${shift}%)`;
  } else if (!isNaN(state.offset)) {
    if (state.offset !== 0) {
      style.transform = `translateX(${state.offset}px)`;
    } else {
      style.transition = elastic;
    }
  }

  // Return the active index, jump function, swipe handlers, and style
  return [
    state.active,
    (n) => dispatch({ type: "jump", desired: n }),
    handlers,
    style,
  ];
}
