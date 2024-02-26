
const validateForm = (email, password, fullname) => {
    const mailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
    const passwordTest = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,16}$/.test(password)
    const fullnameTest = /^[a-zA-Z\s]{5,}$/.test(fullname)
    
    if(!mailTest) return "Email is invalid"
    if(!passwordTest) return "Password is invalid"
    if(!fullnameTest) return "Full name should only contain alphabet characters"

    return null
}

export default validateForm;