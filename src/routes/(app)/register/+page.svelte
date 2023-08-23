<script lang="ts">
    // import Assembler from "$lib/toast/Assembler.svelte";
    import { addToast } from "$lib/toast/store";
    import { fromDatabase } from "$lib/userdata/store";


    let accountLog:any = [];
    // ----- This is the store function -----
    // It takes the content from store and saves
    // into a variable that I can easily reference.
    fromDatabase.subscribe((value) => { // Add an unsubscribe function, similar to malloc().
        accountLog = value;
    })
    // --------------------------------------
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
                    addToast("Email taken");
                    emailCheck = false;
                }
            }
            // Password check
            if (data.password !== data.repeatPassword) {
                addToast("Passwords don't match");
                passwordCheck = false
            }
            if (emailCheck && passwordCheck) {
                addToast(`Hello ${data.firstName}, you have ${data.role.toLowerCase()} access.`);

                let toSave:any = {
                    "firstName": data.firstName,
                    "lastName": data.lastName,
                    "email": data.email,
                    "password": data.password,
                };
                accountLog.push(toSave);
                //------------------
                fromDatabase.update((value) => [ {...toSave, role:"USER"}, ...value]) // Code I traced from stores.js in toasts
                // --------------------
            }
        }
        data = [];
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

    let passwordVisibilityToggle = "password"
    let repeatPasswordVisibilityToggle = "password"
    // let visibilitySwitcher = (address:string) => {
    //     if (address == repeatPasswordVisibilityToggle) {
    //         if (address == "password") address = "text"
    //         else address = "password"
    //     }
    //     switch (address) {
    //         case passwordVisibilityToggle:
    //             if (passwordVisibilityToggle == "password") passwordVisibilityToggle = "text"
    //             else passwordVisibilityToggle = "password"
    //             break
    //         case repeatPasswordVisibilityToggle:
    //             if (repeatPasswordVisibilityToggle == "password") repeatPasswordVisibilityToggle = "text"
    //             else repeatPasswordVisibilityToggle = "password"
    //             break
    //     }
    // }
</script>

<h1>Register</h1>
<!-- <Assembler /> -->
<form on:submit|preventDefault = {registerFunction}>
    <div class="formItem" id="firstnameDiv">
        <label for="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" class="registrationData" required>
    </div>
    <div class="formItem" id="lastnameDiv">
        <label for="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" class="registrationData" required>
    </div>
    <div class="formItem" id="emailDiv">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" class="registrationData" required>
    </div>
    <div class="formItem" id="passwordDiv">
        <label for="password">Password</label>
        <input type="{passwordVisibilityToggle}" name="password" id="password" class="registrationData" required>
        <input type="checkbox" id="passwordVisibilityToggle" on:click={() => {if (passwordVisibilityToggle == "password"){passwordVisibilityToggle = "text"} else passwordVisibilityToggle = "password"}}>
        <label for="passwordVisibilityToggle">Show</label>
    </div>
    <div class="formItem" id="repeatPasswordDiv">
        <label for="repeatPassword">Repeat Password</label>
        <input type="{repeatPasswordVisibilityToggle}" name="repeatPassword" id="repeatPassword" class="registrationData" required>
        <input type="checkbox" id="repeatPasswordVisibilityToggle" on:click={() => {if (repeatPasswordVisibilityToggle == "password"){repeatPasswordVisibilityToggle = "text"} else repeatPasswordVisibilityToggle = "password"}}>
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