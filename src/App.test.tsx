import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { SurveyCreator } from "survey-creator-react";
import { SurveyCreatorWidget } from "./surveyWidget";

test('renders learn react link', () => {
  render(<App />);
  <h1>Test</h1>;
  <SurveyCreatorWidget></SurveyCreatorWidget>;
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});