import { FormControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export class Contact {
  name: string | undefined;
  phoneNumber: string | undefined;
  email: string | undefined;
  ip: string | undefined;

  IpValidator(control: FormControl) {
    return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value)
      ? null
      : { ip: true };
  }

  formFields() {
    return <FormlyFieldConfig[]>[
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Name',
          placeholder: 'Name',
          required: true,
        },
        validation: {
          messages: {
            required: 'You need to provide a name!',
          },
        },
      },
      {
        key: 'phoneNumber',
        type: 'input',
        templateOptions: {
          type: 'tel',
          label: 'Phone Number',
          placeholder: 'Phone Number',
          required: true,
        },
        validation: {
          messages: {
            required: 'You need to provide a phone number!',
          },
        },
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email',
          placeholder: 'Email',
          required: true,
        },
        validation: {
          messages: {
            required: 'You need to provide an email!',
          },
        },
      },
      {
        key: 'ip',
        type: 'input',
        templateOptions: {
          label: 'IP Address',
          required: true,
        },
        validators: {
          ip: {
            expression: (c: any) => /(\d{1,3}\.){3}\d{1,3}/.test(c.value),
            message: "You need to provide a valid IP!",
          },
        },
      },
    ];
  }
}
