import React, { useEffect, useState } from 'react'

type Props = {
    onChange: () => void;
}

function Toggle() {
    // const getStorageTheme = () => {
    //     let theme = 'light-theme';
    //     if (localStorage.getItem('theme')) {
    //         theme = localStorage.getItem('theme') || 'light-theme';
    //     }
    //     return theme;
    // };
    // const [theme, setTheme] = useState(getStorageTheme());

    // const toggleTheme = () => {
    //     if (theme === 'light-theme') {
    //         setTheme('dark-theme');
    //     } else {
    //         setTheme('light-theme');
    //     }
    // };

    // useEffect(() => {
    //     // Remove the previous theme class
    //     document.documentElement.classList.remove('light-theme', 'dark-theme');
    //     // Add the current theme class
    //     document.documentElement.classList.add(theme);
    //     localStorage.setItem('theme', theme);
    // }, [theme]);

    if (document.documentElement.className = "null") {
        document.documentElement.className = "light";
    }

    function setDarkMode() {
        document.documentElement.className = "dark";
        localStorage.setItem("selectedThemeType", "dark");
    }

    function setLightMode() {
        document.documentElement.className = "light";
        localStorage.setItem("selectedThemeType", "light");
    }

    const selectedTheme = localStorage.getItem("selectedThemeType");

    if (selectedTheme === "dark") {
        setDarkMode();
    }

    function toggleTheme(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    }

    return (
        // <div onClick={toggleTheme} className='toggle-switch'>
        //         <input type='checkbox' onClick={toggleTheme}></input>
        //     <label onClick={toggleTheme} className='toggle-switch-lable' htmlFor="toggle-switch-lable">
        //         <span className='slider' onClick={toggleTheme}></span>
        //     </label>
        // </div>

        <>
            <input
                onChange={toggleTheme}
                defaultChecked={selectedTheme === 'dark'}
                className="theme-switch"
                type="checkbox" id="switch"
            />
            <label className="theme-switch" htmlFor="switch">Toggle</label>
        </>
    )
}

export default Toggle

