
const tasks=JSON.parse(localStorage.getItem("tasks"))||[]

const tasksForm=document.getElementById('new-task')
tasksForm.addEventListener("submit",function addTask(event)
{
    event.preventDefault()
    const newTasksData=new FormData(tasksForm)
    const task=Object.fromEntries(newTasksData.entries())
    task.id=crypto.randomUUID()
    tasks.push(task)
    localStorage.setItem("tasks",JSON.stringify(tasks))
    console.log("Form submitted successfully")
    tasksForm.reset()
    location.reload()

})



function viewtasks(tasks)

{   const area=document.getElementById("all-tasks")
    area.innerHTML=""
    const groupedTasksByDate={}
    //Grouping tasks by date
     for(let task of tasks)
        {
            const date=task.Duedate
            if(!groupedTasksByDate[date])
            {
                groupedTasksByDate[date]=[]
            }
            groupedTasksByDate[date].push(task)
        }

    //creating cards for the various dates
        
    for (let date in groupedTasksByDate)
    {   
       let card= document.createElement("div")
       card.className="task-card"
       card.innerHTML=
       `
        <h4>${date}</h4>
        `
        //add the respective dates
        for(let task of groupedTasksByDate[date] )
        {
            card.innerHTML +=
            `
                <p>${task.Taskname}</p>
                <p>${task.Category}</p>
                `
            let deletebutton=document.createElement("button")
            deletebutton.textContent="Delete Task"
            deletebutton.classList.add("delete-btn")
            deletebutton.classList.add("btn")
            deletebutton.addEventListener("click",function()
                {
                    let taskindex=tasks.findIndex(function (item) {return item.id===task.id})
                    if(taskindex>=0)
                    {tasks.splice(taskindex,1)}
                    localStorage.setItem("tasks",JSON.stringify(tasks))
                    location.reload()
                    
                }
            )
                    deletecontainer=document.createElement("div")
                    deletecontainer.appendChild(deletebutton)
                    card.appendChild(deletecontainer)
        }

        area.appendChild(card)
        

    }
}
viewtasks(tasks)

function dailytasks(tasks)
{   
    let today=new Date().toISOString().split('T')[0]
    const groupedtodaystask=[]
    const dailytasks=document.getElementById("daily-tasks")
    dailytasks.innerHTML=""

    for(let task of tasks)
    {
        if(task.Duedate===today)
        {
            groupedtodaystask.push(task)
            let dailytask=document.createElement("div")
            dailytask.className="dailytask"
            dailytask.innerHTML+=
             `<p>${task.Taskname}</p> <p>${task.Category}</p>`
            
             //creating the delete button for each task
            let deletebutton=document.createElement("button")
            deletebutton.textContent="Delete Task"
            deletebutton.classList.add("delete-btn")
            deletebutton.classList.add("btn")
            deletebutton.addEventListener("click",function()
                {
                    let taskindex=tasks.findIndex(function (item) {return item.id===task.id})
                    if(taskindex>=0)
                    {tasks.splice(taskindex,1)}
                    localStorage.setItem("tasks",JSON.stringify(tasks))
                    location.reload()
                    
                }
            )
            deletecontainer=document.createElement("div")
            deletecontainer.appendChild(deletebutton)
            dailytask.appendChild(deletecontainer)            
            dailytasks.appendChild(dailytask)
            dailytasks.classList.add("dailytasks")
        }
    }
    console.log(groupedtodaystask)

}
dailytasks(tasks)

function personaltasks(tasks)
{   
    personaltaskscontainer=document.getElementById("personaltasks")
    personaltaskscontainer.innerHTML=""
    for(let task of tasks)
    {
        if(task.Category==="personal")
        {
            let personaltask=document.createElement("div")
            personaltask.classList.add("personal-task")
            personaltask.innerHTML=`
            <p>${task.Duedate}</p>
            <p>${task.Taskname}</p>
            <p>${task.Category}</p>`

            let deletebutton=document.createElement("button")
            deletebutton.textContent="Delete Task"
            deletebutton.classList.add("delete-btn")
            deletebutton.classList.add("btn")
            deletebutton.addEventListener("click",function()
                {
                    let taskindex=tasks.findIndex(function (item) {return item.id===task.id})
                    if(taskindex>=0)
                    {tasks.splice(taskindex,1)}
                    localStorage.setItem("tasks",JSON.stringify(tasks))
                    location.reload()
                    
                }
            )
            deletecontainer=document.createElement("div")
            deletecontainer.appendChild(deletebutton)
            personaltask.appendChild(deletecontainer)
            personaltaskscontainer.appendChild(personaltask)

            personaltaskscontainer.classList.add("personaltaskscontainer")


        }
    }
}
personaltasks(tasks)

function schooltasks()
{
    const schooltaskscontainer=document.getElementById("schooltasks")
    schooltaskscontainer.innerHTML=""
    for (let task of tasks)
    {
        if(task.Category==="school")
        {
            let schooltask=document.createElement("div")
            schooltask.classList.add("schooltask")
            let duedateparagraph=document.createElement("p")
            duedateparagraph.textContent=task.Duedate
            let tasknameparagraph=document.createElement("p")
            tasknameparagraph.textContent=task.Taskname
            let categoryparagraph=document.createElement("p")
            categoryparagraph.textContent=task.Category
            let deletebutton=document.createElement("button")
            deletebutton.textContent="Delete Task"
            deletebutton.classList.add("delete-btn")
            deletebutton.classList.add("btn")
            deletebutton.addEventListener("click",function()
                {
                    let taskindex=tasks.findIndex(function (item) {return item.id===task.id})
                    if(taskindex>=0)
                    {tasks.splice(taskindex,1)}
                    localStorage.setItem("tasks",JSON.stringify(tasks))
                    location.reload()
                    
                }
            )
            schooltask.appendChild(duedateparagraph)
            schooltask.appendChild(tasknameparagraph)
            schooltask.appendChild(categoryparagraph)
            let deletecontainer=document.createElement("div")
            deletecontainer.appendChild(deletebutton)
            schooltask.appendChild(deletecontainer)
            schooltaskscontainer.appendChild(schooltask) 
            schooltaskscontainer.classList.add("schooltaskscontainer")
        }
    }
}
schooltasks(tasks)


function errands()
{
    const errandscontainer=document.getElementById("errands")
    errandscontainer.innerHTML=""

    for (let task of tasks)
    {
        if(task.Category==="errands")
        {
            let errand=document.createElement("div")
            errand.classList.add("errand")
            let duedateparagraph=document.createElement("p")
            duedateparagraph.textContent=task.Duedate
            let tasknameparagraph=document.createElement("p")
            tasknameparagraph.textContent=task.Taskname
            let categoryparagraph=document.createElement("p")
            categoryparagraph.textContent=task.Category
            let deletebutton=document.createElement("button")
            deletebutton.textContent="Delete Task"
            deletebutton.classList.add("delete-btn")
            deletebutton.classList.add("btn")
            deletebutton.addEventListener("click",function()
                {
                    let taskindex=tasks.findIndex(function (item) {return item.id===task.id})
                    if(taskindex>=0)
                    {tasks.splice(taskindex,1)}
                    localStorage.setItem("tasks",JSON.stringify(tasks))
                    location.reload()
                }
            )
            errand.appendChild(duedateparagraph)
            errand.appendChild(tasknameparagraph)
            errand.appendChild(categoryparagraph)
            let deletecontainer=document.createElement("div")
            deletecontainer.appendChild(deletebutton)
            errand.appendChild(deletecontainer)
            errandscontainer.appendChild(errand)
            errandscontainer.classList.add("errandscontainer")
            
        }
    }
}
errands(tasks)
