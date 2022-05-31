{
    //Partial type
    
    type ToDo = {
      title: string;
      description: string;
      priority: 'high' | 'low';
    };
  
    function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
      return { ...todo, ...fieldsToUpdate };
    }
    const todo: ToDo = {
      title: 'study ',
      description: 'TypeScript',
      priority: 'high',
    };
    const updated = updateTodo(todo, { priority: 'low' });
    console.log(updated);
  }
  