export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string', 
    },
    {
      name: 'progress',
      title: 'Progress',
      type:'number',
      description: 'Progress of skill from 0 to 100%',
      validations:(Rule)=>Rule.main(0).max(100),
    },
    
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options:{
        hotspot:true,
      }

    },
    

  ],
}
