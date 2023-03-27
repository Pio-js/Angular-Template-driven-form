import { AbstractControl, ValidationErrors } from "@angular/forms";

export class noSpace {
    //A validator is a function that processes a FormControl or collection of controls
    //and returns an error map or null. A null map means that validation has passed.
    static noSpaceValidations(control: AbstractControl): ValidationErrors | null {

        let controlValue = control.value as string;

        if(controlValue.indexOf(' ') >= 0) {
            return {noSpaceValidator: true};
        } else {
            return null;
        }
    }
}