// build your `Task` model here
const db = require('../../data/dbConfig.js');

function getTasks() {
    return db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.task_id')
        .select(
            'p.project_description', 
            'p.project_name', 
            't.task_completed',
            't.task_description',
            't.task_id',
            't.task_notes'
        )
}

async function createTask(task) {
    const [task_id] = await db('tasks').insert(task)
    return getTasks().where({ task_id }).first()
} 

module.exports = {
    getTasks,
    createTask
}
