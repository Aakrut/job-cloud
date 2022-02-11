const register =  (req, res) => {
    res.end('Register');
}

const login =  (req, res) => {
    res.end('Login')
}

const updateUser =  (req, res) => {
    res.send('Update User');
}

export {register,login,updateUser}