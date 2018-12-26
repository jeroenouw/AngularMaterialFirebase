import { FormControl } from '@angular/forms';

export class EmailValidator {

  public static isValid (control: FormControl) {
    const RegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);

    if (RegEx) {
      return null;
    }

    return {
      'invalidEmail': true
    };
  }
}
