// Abstract classes serve as a base for other classes.
// They cannot be instantiated directly, but they can define methods and properties.
// Any class that extends an abstract class must implement all its abstract methods.

// Abstract Class: Task
// This abstract class represents a general task with a specific action.
abstract class Task {
    // Abstract method: action
    // This method must be implemented by any class that extends Task.
    abstract action(): string;

    // Method: run
    // This method logs the action of the task.
    run() {
        console.log('Performing: ' + this.action());
    }
}

// Concrete Class: DatabaseBackup
// This class extends the abstract Task class and provides an implementation for the action method.
class DatabaseBackup extends Task {
    // Implementation of the abstract action method.
    action(): string {
        return 'Backup database';
    }
}

// Create an instance of the DatabaseBackup class and run the task.
new DatabaseBackup().run(); // Output: Performing: Backup database

// The following line would throw an error because you cannot create an instance of an abstract class.
// new Task().run(); // Error: Cannot create an instance of an abstract class.
