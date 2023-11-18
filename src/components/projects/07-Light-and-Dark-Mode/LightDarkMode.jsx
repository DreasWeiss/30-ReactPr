import React, { useState, useEffect } from 'react'
import Blog from './Blog'
import { ThemeContext, themes } from './contex/theme-contex';


export default function LightDarkMode() {

    const [theme, setTheme] = useState(themes.light);

    useEffect(() => {
        let docBody = document.body;
        switch (theme) {
            case themes.light:
                docBody.classList.remove('bg-dark');
                docBody.classList.remove('text-light');
                docBody.classList.add('bg-light');
                docBody.classList.add('text-dark');
                break;
            case themes.dark:
                docBody.classList.remove('bg-light');
                docBody.classList.remove('text-dark');
                docBody.classList.add('bg-dark');
                docBody.classList.add('text-light');
        }
    }, [theme]);

    function changeTheme() {
        // console.log(theme);

        theme === themes.light ?
            setTheme(themes.dark) :
            setTheme(themes.light);
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <Blog theme={theme} />
        </ThemeContext.Provider>
    )
}
