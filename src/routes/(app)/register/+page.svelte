<h1>Register</h1>
<form>
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
        <input type="radio" name="role" id="guest" class="registrationData" value="GUEST">
        <label for="guest">Guest</label>
    </div>
    
    <button type="submit">Register!</button>
    
</form>