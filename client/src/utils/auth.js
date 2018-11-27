
class Auth {
	static onAuthChangeCallback = null
	static login (token, user) {
		localStorage.setItem('token', token)
		localStorage.setItem('user', user)
		Auth.onAuthChangeCallback(token)
	}
	static logout() {
		localStorage.removeItem('token');
    if (Auth.onAuthChangeCallback)
      Auth.onAuthChangeCallback(false);
	}
	static getToken() {
		return localStorage.getItem('token')
	}
	static getUser() {
		return localStorage.getItem('user')
	}
	static isAuthenticated() {
		return !!Auth.getToken()
	}
	static onAuthChange(callback) {
		Auth.onAuthChangeCallback = callback;
	}
}
export default Auth;