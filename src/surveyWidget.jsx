import { useState } from "react";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
// Import stylesheets for SurveyJS Library and Survey Creator
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

export function SurveyCreatorWidget(props) {
  const [creator, setCreator] = useState(null);
  if (!creator) {
    // Create a Survey Creator instance
    const creator = new SurveyCreator({ showLogicTab: true });
    setCreator(creator);
  }
  const style = { height: "100vh" };
  return (
    <div style={style}>
      <SurveyCreatorComponent creator={creator}></SurveyCreatorComponent>
    </div>
  );
}

