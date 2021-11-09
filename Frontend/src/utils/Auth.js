import Cookies from 'js-cookie';

// Reset local store on logout
export const logout = () => {
    window.localStorage.clear();
    Cookies.remove('authToken')
}

export const isAuthorized = () => {
    return localStorage.getItem('token');
}