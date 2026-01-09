# Bug Fixes Documentation

## 🐛 Bug #2: Undo Snackbar State Management

**Issue**: Snackbar close handler was empty, causing lastDeleted state to persist
**Fix**: Added clearLastDeleted function and proper state cleanup
**Files**: useTasks.ts, TasksContext.tsx, App.tsx

## 🐛 Bug #3: Unstable Task Sorting

**Issue**: Math.random() used for tie-breaking caused non-deterministic ordering
**Fix**: Replaced with alphabetical sorting by title for stable results
**Files**: logic.ts
## 🐛 Bug #4: Double Dialog Opening

**Issue**: Event bubbling caused edit/delete buttons to also trigger row click
**Fix**: Added event.stopPropagation() to button handlers
**Files**: TaskTable.tsx