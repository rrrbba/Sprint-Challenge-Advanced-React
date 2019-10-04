import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';



export const useDarkMode = () => {


    const [darkOn, setDarkOn] = useLocalStorage('darkMode', false);


    useEffect(() => {

        if(darkOn === true){

            document.querySelector('body').classList.add('dark-mode')
        } else {

            document.querySelector('body').classList.remove('dark-mode')
        }

    }, [darkOn]);

    const toggleMode = e => {
        e.preventDefault();
        setDarkOn(!darkOn);
    }


    return [setDarkOn, toggleMode]
};