import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense, useContext, useState } from "react";
import "./styles/index.scss";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { classNames } from "./helpers/classNames/classNames";

export const App = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
    };

    const classname = classNames("mainclass", { hover: true }, []);
    console.log(classname);

    return (
        <div
            className={classNames("app", {}, [
                theme,
            ])}
        >
            <button onClick={toggleTheme}>Сменить цветовую тему</button>
            <Link to={"/"}>На главную</Link>
            <Link to={"/about"}>О нас</Link>
            <Suspense fallback={<div>Loader</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync />} />
                    <Route path={"/"} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};
