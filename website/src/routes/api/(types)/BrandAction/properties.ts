import type { PropertyProps } from '~/components';

export const properties: Record<string, PropertyProps> = {
  TInput: {
    modifier: 'extends',
    type: 'any',
  },
  TName: {
    modifier: 'extends',
    type: {
      type: 'custom',
      name: 'BrandName',
      href: '../BrandName/',
    },
  },
  BaseTransformation: {
    modifier: 'extends',
    type: {
      type: 'custom',
      name: 'BaseTransformation',
      href: '../BaseTransformation/',
      generics: [
        {
          type: 'custom',
          name: 'TInput',
        },
        {
          type: 'intersect',
          options: [
            {
              type: 'custom',
              name: 'TInput',
            },
            {
              type: 'custom',
              name: 'Brand',
              href: '../Brand/',
              generics: [
                {
                  type: 'custom',
                  name: 'TName',
                },
              ],
            },
          ],
        },
        'never',
      ],
    },
  },
  type: {
    type: {
      type: 'string',
      value: 'brand',
    },
  },
  reference: {
    type: {
      type: 'custom',
      modifier: 'typeof',
      name: 'brand',
      href: '../brand/',
    },
  },
  name: {
    type: {
      type: 'custom',
      name: 'TName',
    },
  },
};
