export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string', 
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',

    },
    {
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options:{

      hotspot: true,
      }
      
    },
    {
      name: 'profiePic',
      titile:'ProfilePic',
      type:'image',
      options:{
        hotspot:true,
      }
    },
    {
      name: 'phoneNumber',
      titile: 'PhoneNumber',
      type:'string',
    },
    {
      name: 'socials',
      tittle:'Socials',
      type:'array',
      of:[{type:'reference', to:{type:'social'}}],
    }

  ],
}
