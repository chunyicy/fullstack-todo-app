package todoList.example.todoAppBackend;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


// provides RESTful endpoints for managing tasks
@CrossOrigin // enables the frontend to communicate with the backend
@RestController
@RequestMapping("/tasks") // Maps all methods in this controller to the /tasks endpoint.
public class TaskController {

    //Uses @Autowired to inject the TaskRepository bean, allowing interaction with the database.
    @Autowired
    private TaskRepository taskRepository;

    // Maps to GET /tasks and returns a list of all tasks from the repository.
    @GetMapping
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // Maps to POST /tasks and creates a new task. The task data is provided in the request body.
    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    // Maps to PUT /tasks/{id}. It retrieves the task by ID, updates its properties, and saves the updated task back to the repository.
    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task updatedTask) {
        Task task = taskRepository.findById(id).orElseThrow();
        task.setDescription(updatedTask.getDescription());
        task.setCompleted(updatedTask.isCompleted());
        return taskRepository.save(task);
    }

    // Maps to DELETE /tasks/{id} and deletes the specified task by ID.
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskRepository.deleteById(id);
    }

    // Maps to DELETE /tasks and deletes all tasks in the repository.
    @DeleteMapping
    public void deleteAllTasks() {
        taskRepository.deleteAll();
    }
}
