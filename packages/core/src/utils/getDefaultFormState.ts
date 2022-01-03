export default function getDefaultFormState(
    _schema: Record<string, unknown>,
    formData: Record<string, unknown>,
    rootSchema = {},
    includeUndefinedValues = true
): void {
    // if (!isObject(_schema)) {
    //     throw new Error(`Invalid schema: ${_schema}`);
    // }
    // const schema = retrieveSchema(_schema, rootSchema, formData);

    // const defaults = computeDefaults(
    //     schema,
    //     _schema.default,
    //     rootSchema,
    //     formData,
    //     includeUndefinedValues
    // );

    // if (typeof formData === 'undefined') {
    //     // No form data? Use schema defaults.
    //     return defaults;
    // }

    // // 传入formData时，合并传入数据
    // if (isObject(formData) || Array.isArray(formData)) {
    //     return mergeDefaultsWithFormData(defaults, formData);
    // }
    // if (formData === 0 || formData === false || formData === '') {
    //     return formData;
    // }
    // return formData || defaults;
}
