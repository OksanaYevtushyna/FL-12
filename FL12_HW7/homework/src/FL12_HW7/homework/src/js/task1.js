let email = prompt('Please, enter your email');
let userPassword = 'UserPass';
let adminPassword = 'AdminPass';
let minDefPass = 5;
let minNewPass = 6;

if (email === null || email === undefined) {
    alert('Canceled.');
} else {
    if (email.length >= minDefPass) {
        if (email === 'user@gmail.com') {
            if (prompt('Enter your password') === userPassword) {
                if (confirm('Do you want to change your password?')) {
                    if (prompt('Write your old password') === userPassword) {
                        let newUserPass = prompt('Write a new password');
                        if (newUserPass === null || newUserPass === undefined) {
                            alert('Cancelled');
                        } else {
                            if (newUserPass.length >= minNewPass) {
                                if (prompt('Please, write your new password one more time') === newUserPass) {
                                    alert('You have successfully changed your password.');
                                } else {
                                    alert('You wrote the wrong password.');
                                }
                            } else {
                                alert('It’s too short password. Sorry.');
                            }
                        }
                    } else {
                        alert('Wrong password');
                    }
                } else {
                    alert('You have failed the change.');
                }
            } else {
                alert('Wrong password');
            }
        } else if (email === 'admin@gmail.com') {
            if (prompt('Enter your password') === adminPassword) {
                if (confirm('Do you want to change your password?')) {
                    if (prompt('Write your old password') === adminPassword) {
                        let newAdminPass = prompt('Write a new password');
                        if (newAdminPass === null || newAdminPass === undefined) {
                            alert('Cancelled');
                        } else {
                            if (newAdminPass.length >= minNewPass) {
                                if (prompt('Please, write your new password one more time') === newAdminPass) {
                                    alert('You have successfully changed your password.');
                                } else {
                                    alert('You wrote the wrong password.');
                                }
                            } else {
                                alert('It’s too short password. Sorry.');
                            }
                        }
                    } else {
                        alert('Wrong password');
                    }
                } else {
                    alert('You have failed the change.');
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('I don’t know you');
        }
    } else {
        alert("I don't know any emails having name length less than 5 symbols");
    }
}
