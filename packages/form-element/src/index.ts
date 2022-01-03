import FormRender from '@meils/form-render-core';
import type { CreateFormOption } from '@meils/form-render-core';

import WidgetsComponentsMap from './widgets/widgets_map';

FormRender.createFormOption = {
  componentsMapping: {
    form: 'el-form',
    formItem: 'el-form-item',
    button: 'el-button',
    popover: 'el-popover',
  },
  widgetComponents: Object.freeze(WidgetsComponentsMap)
} as CreateFormOption;

export default FormRender;
