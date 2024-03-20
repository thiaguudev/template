import { useState } from "react";

import { Preview } from "./preview";
import { Settings } from "./settings";

export default function SurveyBuilder() {
  const [screen, setScreen] = useState<string>("question-customization");

  const handleSetScreen = (currentScreen: string) => {
    if (currentScreen) setScreen(currentScreen);
  };

  return (
    <>
      <Settings onChangeScreen={handleSetScreen} />
      <Preview screen={screen} />
    </>
  );
}
