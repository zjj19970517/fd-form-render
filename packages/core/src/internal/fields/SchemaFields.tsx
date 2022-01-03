import { JSONSchemaType } from 'ajv';
import * as tsx from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';

import { FormConfig } from '../../interfaces/common';

interface SchemaFieldsProps<S> {
  schema: JSONSchemaType<S>;
  uiSchema: Record<string, unknown>;
  formConfig: FormConfig;
}

@Component({
  name: 'SchemaFields',
})
class SchemaFields<S> extends tsx.Component<SchemaFieldsProps<S>> {

  protected render(): VueTsxSupport.JSX.Element {
    return (
      <div>
        App
      </div>
    );
  }
}

export default SchemaFields;
