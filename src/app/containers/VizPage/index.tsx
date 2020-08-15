import React from 'react';
import { Helmet } from 'react-helmet-async';

export function VizPage() {
  const config = {
    widgets: [
      {
        elementId: 'test',
        vizSettings: {
          vizType: 'number',
          resource: '',
          field: '',
        },
      },
    ],
    dataset: '',
  };
  const elements: any = [];
  config.widgets.forEach(element => {
    elements.push(<li>{element.elementId}</li>);
  });
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A viz page" />
      </Helmet>
      <span>VizPage container</span>
      {elements}
    </>
  );
}
