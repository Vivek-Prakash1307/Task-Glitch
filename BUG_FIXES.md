# Bug Fixes Documentation

## 🐛 Bug #2: Undo Snackbar State Management

**Issue**: Snackbar close handler was empty, causing lastDeleted state to persist
**Fix**: Added clearLastDeleted function and proper state cleanup
**Files**: useTasks.ts, TasksContext.tsx, App.tsx