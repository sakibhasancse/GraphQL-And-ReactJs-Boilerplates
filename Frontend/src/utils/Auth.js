

// Reset local store on logout
export const logout = () => {
    window.localStorage.clear()
}

export const isAuthorized = () => {
   return localStorage.getItem('token');
}