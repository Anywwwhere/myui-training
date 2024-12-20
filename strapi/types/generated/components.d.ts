import type { Schema, Struct } from '@strapi/strapi';

export interface BlockCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_block_cta_banners';
  info: {
    description: '';
    displayName: 'CTA Banner';
    icon: 'handHeart';
  };
  attributes: {
    background_color: Schema.Attribute.Relation<'oneToOne', 'api::color.color'>;
    button: Schema.Attribute.Component<'element.button', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files'>;
    text_color: Schema.Attribute.Relation<'oneToOne', 'api::color.color'>;
    title: Schema.Attribute.String;
  };
}

export interface BlockFaqList extends Struct.ComponentSchema {
  collectionName: 'components_block_faq_lists';
  info: {
    description: '';
    displayName: 'Faq List';
    icon: 'question';
  };
  attributes: {
    button: Schema.Attribute.Component<'element.button', false>;
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    title: Schema.Attribute.String;
  };
}

export interface BlockHero extends Struct.ComponentSchema {
  collectionName: 'components_block_heroes';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'rocket';
  };
  attributes: {
    button: Schema.Attribute.Component<'element.button', false>;
    images: Schema.Attribute.Component<'element.images-block', true>;
    subtitle: Schema.Attribute.String;
    tag: Schema.Attribute.Component<'element.tag', false>;
    title: Schema.Attribute.String;
  };
}

export interface BlockInformationCards extends Struct.ComponentSchema {
  collectionName: 'components_block_information_cards';
  info: {
    displayName: 'Information Cards';
    icon: 'grid';
  };
  attributes: {
    info_cards: Schema.Attribute.Component<'element.info-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface BlockReassurance extends Struct.ComponentSchema {
  collectionName: 'components_block_reassurances';
  info: {
    displayName: 'reassurance';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface BlockServices extends Struct.ComponentSchema {
  collectionName: 'components_block_services';
  info: {
    description: '';
    displayName: 'services';
    icon: 'apps';
  };
  attributes: {
    services: Schema.Attribute.Component<'element.service-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    show_reassurance: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface BlockTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_block_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'star';
  };
  attributes: {
    card_background: Schema.Attribute.Relation<'oneToOne', 'api::color.color'>;
    card_text_color: Schema.Attribute.Relation<'oneToOne', 'api::color.color'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementButton extends Struct.ComponentSchema {
  collectionName: 'components_element_buttons';
  info: {
    description: '';
    displayName: 'button';
    icon: 'cursor';
  };
  attributes: {
    background_color: Schema.Attribute.Relation<'oneToOne', 'api::color.color'>;
    custom_link: Schema.Attribute.String;
    name: Schema.Attribute.String;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    text_color: Schema.Attribute.Relation<'oneToOne', 'api::color.color'>;
  };
}

export interface ElementImagesBlock extends Struct.ComponentSchema {
  collectionName: 'components_element_images_blocks';
  info: {
    displayName: 'Images Block';
    icon: 'picture';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface ElementInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_element_info_cards';
  info: {
    displayName: 'info card';
    icon: 'layout';
  };
  attributes: {
    button: Schema.Attribute.Component<'element.button', false>;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementLinksGroup extends Struct.ComponentSchema {
  collectionName: 'components_element_links_groups';
  info: {
    description: '';
    displayName: 'links group';
    icon: 'bulletList';
  };
  attributes: {
    pages: Schema.Attribute.Relation<'oneToMany', 'api::page.page'>;
  };
}

export interface ElementServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_element_service_cards';
  info: {
    description: '';
    displayName: 'service card';
    icon: 'arrowUp';
  };
  attributes: {
    button: Schema.Attribute.Component<'element.button', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files'>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementSocial extends Struct.ComponentSchema {
  collectionName: 'components_element_socials';
  info: {
    displayName: 'social';
    icon: 'twitter';
  };
  attributes: {
    link: Schema.Attribute.String;
    network: Schema.Attribute.Enumeration<
      ['linkedin', 'instagram', 'facebook', 'x']
    >;
  };
}

export interface ElementTag extends Struct.ComponentSchema {
  collectionName: 'components_element_tags';
  info: {
    description: '';
    displayName: 'Tag';
    icon: 'write';
  };
  attributes: {
    background_color: Schema.Attribute.Relation<'oneToOne', 'api::color.color'>;
    name: Schema.Attribute.String;
    text_color: Schema.Attribute.Relation<'oneToOne', 'api::color.color'>;
  };
}

export interface FooterAboveSection extends Struct.ComponentSchema {
  collectionName: 'components_footer_above_sections';
  info: {
    description: '';
    displayName: 'Above Section';
    icon: 'arrowUp';
  };
  attributes: {
    contact_blocks: Schema.Attribute.Component<'footer.contact-block', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FooterContactBlock extends Struct.ComponentSchema {
  collectionName: 'components_footer_contact_blocks';
  info: {
    displayName: 'contact block';
    icon: 'phone';
  };
  attributes: {
    button: Schema.Attribute.Component<'element.button', false>;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HeaderMenu extends Struct.ComponentSchema {
  collectionName: 'components_header_menus';
  info: {
    description: '';
    displayName: 'menu';
    icon: 'bulletList';
  };
  attributes: {
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.cta-banner': BlockCtaBanner;
      'block.faq-list': BlockFaqList;
      'block.hero': BlockHero;
      'block.information-cards': BlockInformationCards;
      'block.reassurance': BlockReassurance;
      'block.services': BlockServices;
      'block.testimonials': BlockTestimonials;
      'element.button': ElementButton;
      'element.images-block': ElementImagesBlock;
      'element.info-card': ElementInfoCard;
      'element.links-group': ElementLinksGroup;
      'element.service-card': ElementServiceCard;
      'element.social': ElementSocial;
      'element.tag': ElementTag;
      'footer.above-section': FooterAboveSection;
      'footer.contact-block': FooterContactBlock;
      'header.menu': HeaderMenu;
    }
  }
}
