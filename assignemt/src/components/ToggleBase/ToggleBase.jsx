/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

export const ToggleBase = ({ pressed, size, theme, stateProp, className, buttonClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    pressed: pressed || true,
    size: size || "md",
    theme: theme || "dark",
    state: stateProp || "focus",
  });

  return (
    <div
      className={`flex items-center p-[2px] overflow-hidden rounded-[12px] relative ${
        state.size === "sm" ? "w-[36px]" : "w-[44px]"
      } ${state.state === "focus" ? "shadow-focus-ring-4px-primary-100" : ""} ${
        state.size === "sm" ? "h-[20px]" : "h-[24px]"
      } ${state.pressed ? "justify-end" : ""} ${
        state.pressed && state.theme === "light" && ["default", "focus"].includes(state.state)
          ? "bg-primary-200"
          : state.pressed && state.theme === "dark" && state.state === "hover"
          ? "bg-primary-700"
          : state.pressed && state.theme === "light" && state.state === "hover"
          ? "bg-primary-300"
          : state.state === "disabled" || (!state.pressed && state.state === "default" && state.theme === "dark")
          ? "bg-gray-100"
          : state.theme === "dark" && state.state === "focus" && !state.pressed
          ? "bg-gray-50"
          : !state.pressed && state.theme === "light" && ["default", "focus"].includes(state.state)
          ? "bg-primary-50"
          : state.theme === "dark" && state.state === "hover" && !state.pressed
          ? "bg-gray-200"
          : state.theme === "light" && state.state === "hover" && !state.pressed
          ? "bg-primary-100"
          : "bg-primary-600"
      } ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div
        className={`shadow-shadow-sm relative ${state.size === "sm" ? "w-[16px]" : "w-[20px]"} ${
          state.size === "sm" ? "h-[16px]" : "h-[20px]"
        } ${state.size === "sm" ? "rounded-[8px]" : "rounded-[10px]"} ${
          state.state === "disabled" ? "bg-gray-50" : "bg-basewhite"
        } ${buttonClassName}`}
      />
    </div>
  );
};

function reducer(state, action) {
  if (state.pressed === true && state.size === "md" && state.state === "hover" && state.theme === "dark") {
    switch (action) {
      case "click":
        return {
          pressed: false,
          size: "md",
          state: "hover",
          theme: "dark",
        };
    }
  }

  if (state.pressed === true && state.size === "sm" && state.state === "hover" && state.theme === "dark") {
    switch (action) {
      case "click":
        return {
          pressed: false,
          size: "sm",
          state: "hover",
          theme: "dark",
        };
    }
  }

  if (state.pressed === true && state.size === "md" && state.state === "hover" && state.theme === "light") {
    switch (action) {
      case "click":
        return {
          pressed: false,
          size: "md",
          state: "hover",
          theme: "light",
        };
    }
  }

  if (state.pressed === true && state.size === "sm" && state.state === "hover" && state.theme === "light") {
    switch (action) {
      case "click":
        return {
          pressed: false,
          size: "sm",
          state: "hover",
          theme: "light",
        };
    }
  }

  if (state.pressed === false && state.size === "md" && state.state === "hover" && state.theme === "dark") {
    switch (action) {
      case "click":
        return {
          pressed: true,
          size: "md",
          state: "hover",
          theme: "dark",
        };
    }
  }

  if (state.pressed === false && state.size === "sm" && state.state === "hover" && state.theme === "dark") {
    switch (action) {
      case "click":
        return {
          pressed: true,
          size: "sm",
          state: "hover",
          theme: "dark",
        };
    }
  }

  if (state.pressed === false && state.size === "md" && state.state === "hover" && state.theme === "light") {
    switch (action) {
      case "click":
        return {
          pressed: true,
          size: "md",
          state: "hover",
          theme: "light",
        };
    }
  }

  if (state.pressed === false && state.size === "sm" && state.state === "hover" && state.theme === "light") {
    switch (action) {
      case "click":
        return {
          pressed: true,
          size: "sm",
          state: "hover",
          theme: "light",
        };
    }
  }

  switch (action) {
    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };

    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };
  }

  return state;
}
