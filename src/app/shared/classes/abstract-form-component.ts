import { Directive, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Directive()
export abstract class AbstractFormComponent implements OnInit {
    public form: FormGroup;

    public ngOnInit(): void {
        this.initForm();
    }

    public isFieldHasError(fieldName: string, error: string): boolean {
        return this.form.get(fieldName).hasError(error);
    }

    public getFieldErrors(fieldName: string): ValidationErrors {
        return this.form.get(fieldName).errors;
    }

    protected abstract initForm(): void;
}
