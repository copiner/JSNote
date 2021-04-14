
The difference that may make WeakMap worth it is in its name. WeakMap holds references to its keys weakly, meaning that if there are no other references to one of its keys, the object is subject to garbage collection.

Use cases for WeakMap generally revolve around the need to specify metadata or extend an object while still being able to garbage collect it if nobody else cares about it. A perfect example might be the underlying implementation for process.on('unhandledRejection') which uses a WeakMap to keep track of promises that were rejected but no error handlers dealt with the rejection within a tick.

Keeping data about DOM elements that should be released from memory when they¡¯re no longer of interest is another very important use case, and in this regard using WeakMap is probably an even better solution to the DOM-related API caching solution we wrote about earlier using Map