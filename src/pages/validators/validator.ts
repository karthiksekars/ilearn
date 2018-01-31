// The Angular email validator accepts an email like "rob@example", perhaps because "rob@localhost" could be valid.
// The pureEmail regex does not accept "ryan@example" as a valid email address, which I think is a good thing.
// See: EMAIL_REGEXP from https://github.com/angular/angular.js/blob/ffb6b2fb56d9ffcb051284965dd538629ea9687a/src/ng/directive/input.js#L16

// Username
const USERNAME_REGEXP = /^[A-Za-z0-9]+(?:[_][A-Za-z0-9]+)*$/;

// Passwords should be at least 8 characters long and should contain one number, one character and one special character.
//const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const PASSWORD_REGEXP = /^[A-Za-z0-9]+(?:[_][A-Za-z0-9]+)*$/;

export const regexValidators = {
  username: USERNAME_REGEXP,
  password: PASSWORD_REGEXP
};
