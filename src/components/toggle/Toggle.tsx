import React from 'react'

type Props = {
    onChange: () => void;
}

function Toggle() {
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

