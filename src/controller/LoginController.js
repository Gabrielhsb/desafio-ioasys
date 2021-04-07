const service = require('../services/login.service')

class LoginController {
    constructor(loginService){
        this.loginService = loginService
    }
    login = (req, res) => {
        this.loginService.authenticate(req.body)
            .then(user => user)
    };
}

module.exports = new LoginController();