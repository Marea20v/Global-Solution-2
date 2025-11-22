const loadData = async () => {
  try {
    const tasksData = localStorage.getItem('productivity-tasks');
    const statsData = localStorage.getItem('productivity-stats');
    const messagesData = localStorage.getItem('productivity-messages');
    
    return {
      tasks: tasksData ? JSON.parse(tasksData) : null,
      stats: statsData ? JSON.parse(statsData) : null,
      messages: messagesData ? JSON.parse(messagesData) : null
    };
  } catch (error) {
    console.log('Primeira vez usando o bot!');
    return { tasks: null, stats: null, messages: null };
  }
};

const saveData = async (tasks, stats, messages) => {
  try {
    localStorage.setItem('productivity-tasks', JSON.stringify(tasks));
    localStorage.setItem('productivity-stats', JSON.stringify(stats));
    if (messages) {
      localStorage.setItem('productivity-messages', JSON.stringify(messages));
    }
  } catch (error) {
    console.error('Erro ao salvar:', error);
  }
};

export { loadData, saveData };
