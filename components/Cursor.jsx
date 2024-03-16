import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export const Cursor = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkForTouchDevice = () => {
      setIsTouchDevice(navigator.maxTouchPoints > 0);
    };

    checkForTouchDevice();

    window.addEventListener("touchstart", checkForTouchDevice);

    return () => {
      window.removeEventListener("touchstart", checkForTouchDevice);
    };
  }, []);

  return (
    <div>
      {!isTouchDevice && (
        <AnimatedCursor
          outerSize={50}
          color="114, 182, 38"
          outerScale={1.5}
          innerScale={0.8}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      )}
    </div>
  );
};
