import * as tsx from 'vue-tsx-support';
import { JSONSchemaType } from 'ajv';
import { Component, Prop } from 'vue-property-decorator';

import { CreateFormOption, FormRenderProps, DefaultFormConfig, FormConfig } from './interfaces/common';
import { noopObj } from './utils/utils';
import SchemaFields from './internal/fields/SchemaFields';
import getDefaultFormState from './utils/getDefaultFormState';

@Component({
  name: 'FormRender',
  components: {
    SchemaFields
  },
})
class FormRender<S> extends tsx.Component<FormRenderProps<S>> {
  @Prop({ type: Object, default: noopObj }) value!: Record<string, unknown>;
  @Prop({ type: Object, default: noopObj, required: true }) schema!: JSONSchemaType<S>;
  @Prop({ type: Object, default: noopObj }) uiSchema!: Record<string, unknown>;
  @Prop({ type: Object, default: () => (DefaultFormConfig) }) formConfig!: FormConfig;

  public formModel = this.initialFormModel();

  static createFormOption: CreateFormOption = {
    componentsMapping: {
      'form': 'el-form'
    }
  };

  initialFormModel(): void {
    const formModel = getDefaultFormState(this.schema, this.value, this.schema);
  }


  protected render(): VueTsxSupport.JSX.Element {
    const {
      layoutColumn, inlineFooter, inline
    } = this.formConfig;

    const { componentsMapping } = FormRender.createFormOption;
    const FormComponentName = componentsMapping.form;
    console.log('name', FormComponentName);

    const SchemaFieldProps = {
      schema: this.schema,
      uiSchema: this.uiSchema,
      formConfig: { ...DefaultFormConfig, ...this.formConfig }
    };

    return (
      <FormComponentName
        class={[
          'genFromComponent',
          inlineFooter ? 'formInlineFooter' : '',
          inline ? 'formInline' : '',
          !inline ? 'layoutColumn' : '',
          !inline ? `layoutColumn-${layoutColumn}` : '',
        ]}
        ref="genEditForm"
        formModel={this.formModel}
        {...this.formConfig}
      >
        <SchemaFields {...SchemaFieldProps} />
      </FormComponentName>
    );
  }
}

export default FormRender;
