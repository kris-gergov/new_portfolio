import { useState, useEffect } from 'react';

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefer-color-scheme: dark)';
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem('kgTheme');

    const handleChange = () => {
      if (userPref) {
        const userTheme = userPref === 'dark' ? 'dark' : 'light';
        setMode(userTheme);
        userTheme === 'dark'
          ? document.documentElement.classList.add('dark')
          : document.documentElement.classList.remove('dark');
      } else {
        const mediaTheme = mediaQuery.matches ? 'dark' : 'light';
        setMode(mediaTheme);
        mediaTheme === 'dark'
          ? document.documentElement.classList.add('dark')
          : document.documentElement.classList.remove('dark');
      }
    };

    handleChange();

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const userPref = window.localStorage.getItem('kgTheme');
    const current = mode || userPref;

    if (current === 'dark') {
      window.localStorage.setItem('kgTheme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      window.localStorage.setItem('kgTheme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return [mode, setMode] as const;
};

export default useThemeSwitcher;
