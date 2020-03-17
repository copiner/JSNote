
Much like with WeakMap and Map, WeakSet is Set plus weakness minus the iterability

That means you can¡¯t iterate over WeakSet. Its values must be unique object references. If nothing else is referencing a value found in a WeakSet, it¡¯ll be subject to garbage collection
