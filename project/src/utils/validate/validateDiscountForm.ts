const validateDiscountForm = (values: any) => {
    const errors: any = {}
    if (!values.name) {
        errors.name = "Required"
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.phone) {
        errors.phone = "Required"
    } else if (!/^[+]*[(]?[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g.test(values.phone)) {
        errors.phone = "Invalid phone numbers"
    }

    return errors
};

export default validateDiscountForm