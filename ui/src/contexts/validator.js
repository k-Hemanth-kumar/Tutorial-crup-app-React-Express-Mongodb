export function emailValidator(email){
    const pattern=/^[^\s@]+@[^\s@]+\.com$/;
    if(!pattern.test(email)){
        return {succss:false,message:"Please provide valid email"}
    }
    return true
}

export function validatePassword(password) {
    // Password validation regex
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{6,}$/;

    // Check if password meets the pattern
    if (!passwordPattern.test(password)) {
        return {success:false,message:"Password must contain at least one uppercase, one lowercase, one number, one special character, and be at least 6 characters long."};
    }

    return true;
};