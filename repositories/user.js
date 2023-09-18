const login = ({email, password})=>{
    console.log(`Email: ${email}, Password: ${password}`);
}

const register = ({username ,email, password, phone, address})=>{
    console.log(`Email: ${email}, Password: ${password}, Phone: ${phone}, Address: ${address}`);
}

export { login, register}