import { JSONSchemaType } from 'ajv';
import Vue, { ComponentOptions } from 'vue';

export type LabelPosition = 'top' | 'left'

export interface FormConfig {
  layoutColumn?: number; // eg: 1 2 3 ，展示多少列布局，如果使用inline表单这里配置无效
  inline?: boolean;
  inlineFooter?: boolean; // 如果想要保存按钮和表单元素一行显示，需要配置 true
  labelSuffix?: string; // label后缀，默认为:
  labelPosition?: LabelPosition; // 表单域标签的位置
}

export const DefaultFormConfig = {
  layoutColumn: 1,
  inline: false,
  inlineFooter: false,
  labelSuffix: '：',
  labelPosition: 'top'
};

export interface FormRenderProps<S = Record<string, unknown>> {
  schema: JSONSchemaType<S>;
  uiSchema: Record<string, unknown>;
  formConfig: FormConfig;
  value: Record<string, unknown> | null;
}

export interface CreateFormOption {
  componentsMapping: {
    [key: string]: string
  };
  widgetComponents?: Record<string, string>
}


export type FormRenderData = () => FormRenderDataContent;

export interface FormRenderDataContent {
  formModel?: Record<string, unknown>;
}
