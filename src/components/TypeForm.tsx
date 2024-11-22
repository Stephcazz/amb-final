import React, { useEffect } from 'react';

interface TypeFormProps {
  formId: string;
}

export function TypeForm({ formId }: TypeFormProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div data-tf-live={formId}></div>;
}