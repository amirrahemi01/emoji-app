import React, { useEffect, useState } from 'react'

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
        document.documentElement.className = "light-theme";
    }

    function setDarkMode() {
        document.documentElement.className = "dark-theme";
        localStorage.setItem("selectedThemeType", "dark-theme");
    }

    function setLightMode() {
        document.documentElement.className = "light-theme";
        localStorage.setItem("selectedThemeType", "light-theme");
    }

    const selectedTheme = localStorage.getItem("selectedThemeType");

    if (selectedTheme === "dark-theme") {
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

        <div className='toggle-switch'>
            <label>
                <input 
                        onChange={toggleTheme}
                        defaultChecked={selectedTheme === 'dark'}
                        className="theme-switch"
                        type="checkbox" id="switch"
                />
                    <span className='slider'></span>
            </label>
        </div>
    )
}

export default Toggle

