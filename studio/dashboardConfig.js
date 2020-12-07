export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fcec150e07a50476a2c4e7f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-a8ouxynd',
                  apiId: 'd9e60394-0ead-4532-9f70-f1b116b1b011'
                },
                {
                  buildHookId: '5fcec1501124ad419aa061a7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hcizf7v3',
                  apiId: '19e72127-c395-49b6-8043-02f5ebf93aab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jiftuq/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hcizf7v3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
