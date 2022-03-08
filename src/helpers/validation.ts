export const required = (value:any) => (value ? undefined : 'Required')

export const minValue = (min: any) => (value: any) =>
    value.length >= min ? undefined : `Should be greater than ${min}`

export const composeValidators = (...validators: any) => (value:any) =>
    validators.reduce((error:any, validator:any) => error || validator(value), undefined)