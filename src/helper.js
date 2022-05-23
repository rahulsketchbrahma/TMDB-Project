const TOKEN_KEY = 'userToken';

export const login = () => {
    localStorage.setItem(TOKEN_KEY, '73962969048fe583fbd2ce2bb1d96b85078a501e');
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

        return false
}
