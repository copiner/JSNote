const add = (a, b) => {
    const result =
      a && b
        ? a + b
        : function(b) {
            return a + b;
          };
    return result;
 };
