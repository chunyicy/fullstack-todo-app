package todoList.example.todoAppBackend;

import org.springframework.data.jpa.repository.JpaRepository;




// This interface extends JpaRepository, which allows for basic CRUD operations without the need to implement these methods manually.
public interface TaskRepository extends JpaRepository<Task, Long> {
}
