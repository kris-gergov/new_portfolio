import { useState, useEffect } from 'react';

const useThemeSwitcher = () => {
  const [mode, setMode] = useState('');

  useEffect(() => {
    const userPref = window.localStorage.getItem('kgTheme');

    const handleChange = () => {
      if (userPref) {
        const userTheme = userPref === 'dark' ? 'dark' : 'light';
        setMode(userTheme);
        userTheme === 'dark'
          ? document.documentElement.classList.add('dark')
          : document.documentElement.classList.remove('dark');
      } else {
        const mediaTheme = 'dark';
        setMode(mediaTheme);
        mediaTheme === 'dark'
          ? document.documentElement.classList.add('dark')
          : document.documentElement.classList.remove('dark');
      }
    };

    handleChange();
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
