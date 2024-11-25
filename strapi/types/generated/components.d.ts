import type { Schema, Struct } from '@strapi/strapi';

export interface ProgramPlayerList extends Struct.ComponentSchema {
  collectionName: 'components_program_player_lists';
  info: {
    description: '';
    displayName: 'Player List';
    icon: 'bulletList';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Component<'program.video', true>;
  };
}

export interface ProgramVideo extends Struct.ComponentSchema {
  collectionName: 'components_program_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'program.player-list': ProgramPlayerList;
      'program.video': ProgramVideo;
    }
  }
}
