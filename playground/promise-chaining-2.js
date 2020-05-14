require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5eb08ab47347e72d80cc26ac').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5eb08add341aa93950e53e28').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})