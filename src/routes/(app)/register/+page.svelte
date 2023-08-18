<script lang="ts">
    import Toasts from "$lib/toasts/Toasts.svelte";
    import { addToast } from "$lib/toasts/store";
    //toast constants
    let message:String;
    let type:String;
    let dismissible:boolean = true;
    let timeout:number = 2500;


    let accountLog:any = [];
    var data:any = [];
    const registerFunction = (event:Event) => {
        if (event && event.target instanceof HTMLFormElement) {
            const formData = new FormData(event.target);
            for (let field of formData) {
                const [key, value] = field;
                data[key] = value;
            }

            let emailCheck = true;
            let passwordCheck = true;
            
            for (let i = 0; i < accountLog.length && emailCheck == true; i++) {
                if (data.email == accountLog[i].email) {
                    message = "Email taken";
                    type = "error";
                    addToast({message, type, dismissible, timeout});
                    emailCheck = false;
                }
            }
            // Password check
            if (data.password !== data.repeatPassword) {
                message = "Passwords don't match";
                type = "error";
                addToast({message, type, dismissible, timeout});
                passwordCheck = false
            }
            if (emailCheck && passwordCheck) {
                message = `Hello ${data.firstName}, you have ${data.role.toLowerCase()} access.`;
                type = "success";
                addToast({message, type, dismissible, timeout});
                accountLog.push(data)
            }
        }
        data = [] // This fixes a bug in which all the contents of dataLog gets replaced with the latest value of data.
        console.log(accountLog)
    }

    // let passwordState:boolean = false;
    // let passwordStateValue = "password";
    // let repeatPasswordState:boolean = false;

    // const changePasswordVisibility = () => {
    //     let output:string;
    //     if (!passwordState) passwordStateValue = "password";
    //     else passwordStateValue = "text";
    //     passwordState = !passwordState;
    // }
    // const changeRepeatPasswordVisibility = () => {
    //     let output:string;
    //     if (!repeatPasswordState) output = "password";
    //     else output = "text";
    //     repeatPasswordState = !repeatPasswordState;
    //     return output;
    // }
</script>

<h1>Register</h1>
<Toasts />
<form on:submit|preventDefault = {registerFunction}>
    <div class="formItem" id="firstnameDiv">
        <label for="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" class="registrationData" required>
    </div>
    <div class="formItem" id="lastnameDiv">
        <label for="lastName">Last Name</label>
        <input type="text" name="lastname" id="lastName" class="registrationData" required>
    </div>
    <div class="formItem" id="emailDiv">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" class="registrationData" required>
    </div>
    <div class="formItem" id="passwordDiv">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="registrationData" required>
        <input type="checkbox" id="passwordVisibilityToggle">
        <label for="passwordVisibilityToggle">Show</label>
    </div>
    <div class="formItem" id="repeatPasswordDiv">
        <label for="repeatPassword">Repeat Password</label>
        <input type="password" name="repeatPassword" id="repeatPassword" class="registrationData" required>
        <input type="checkbox" id="repeatPasswordVisibilityToggle">
        <label for="repeatPasswordVisibilityToggle">Show</label>
    </div>
    <div class="formItem" id="roleDiv">
        User Role (select one):
        <input type="radio" name="role" id="user" class="registrationData" value="USER">
        <label for="user">User</label>
        <input type="radio" name="role" id="admin" class="registrationData" value="ADMIN">
        <label for="admin">Admin</label>
        <input type="radio" name="role" id="guest" class="registrationData" value="GUEST" required>
        <label for="guest">Guest</label>
    </div>
    
    <button type="submit">Register!</button>
    
</form>