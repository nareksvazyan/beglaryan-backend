import type { Schema, Struct } from '@strapi/strapi';

export interface ListoptionListoption extends Struct.ComponentSchema {
  collectionName: 'components_listoption_listoptions';
  info: {
    displayName: 'listoption';
  };
  attributes: {
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface OptionsOptions extends Struct.ComponentSchema {
  collectionName: 'components_options_options';
  info: {
    displayName: 'options';
  };
  attributes: {
    header: Schema.Attribute.String;
    slecet: Schema.Attribute.Component<'listoption.listoption', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'listoption.listoption': ListoptionListoption;
      'options.options': OptionsOptions;
    }
  }
}
