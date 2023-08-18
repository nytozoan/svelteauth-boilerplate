<script lang="ts">
	import SuccessIcon from "$lib/toasts/SuccessIcon.svelte";
    import Toasts from "$lib/toasts/Toasts.svelte";
	import { addToast } from "$lib/toasts/store";
    import { fromDatabase } from "$lib/userdata/store";
    
    // Toast config
    let message:String;
    let type:String;
    let dismissible:boolean = true;
    let timeout:number = 2500;

    let accountLog:any = [];

    fromDatabase.subscribe((value) => {
        accountLog = value;
    })

    // let accountLog:any = [
    //     {
    //         "firstName": "Jellyfish",
    //         "lastName": "Nytozoan",
    //         "email": "jellyfish@nytozoan.com",
    //         "password": "123"
    //     }
    // ];
    let data:any = [];
    const loginFunction = (event:Event) => {
        if (event && event.target instanceof HTMLFormElement) {
            const formData = new FormData(event.target);
            for (let field of formData) {
                const [key, value] = field;
                data[key] = value;
            }

            let loggedIn:boolean = false;
            console.log(accountLog)
            for (let i = 0; i < accountLog.length; i++) {
                if (data.email == accountLog[i].email) {
                    if (data.password === accountLog[i].password) {
                        addToast({message:`Welcome back, ${accountLog[i].firstName}!`, type:"success", dismissible, timeout})
                        loggedIn = true;
                        break;
                    }
                }
            } if (loggedIn == false) {
                addToast({message:`Invalid email and/or password`, type:"error", dismissible, timeout})
            }
        }
    }
</script>

<h1>Login</h1>

<Toasts />
<form on:submit|preventDefault = {loginFunction}>
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
    
    <button type="submit">Login!</button>
    
</form>