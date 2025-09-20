
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100
});

createRoot(document.getElementById("root")!).render(<App />);
