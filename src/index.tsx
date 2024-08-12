import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
export interface IAdvanceSearch {
  categories: ICategory[];
  // سایر ویژگی‌های مورد نیاز
}

export interface ICategory {
  id: string;
  name: string;
  // سایر ویژگی‌ها
}
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
