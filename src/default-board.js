import { uuid } from './utils'

export default {
  name: 'workshop',
  columns: [
    {
      name: 'todo',
      tasks: [
        {
          description: 'I can finish this work and divide the work to the group of people',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: 'Second task to come now',
          name: 'second task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: 'Editing and adding',
          name: 'and thrid',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'in-progress',
      tasks: [
        {
          description: 'Art work',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'done',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
}
