function hasCollided(obj1, obj2) {
    rightEdge = obj1.x + obj1.width / 2;
    leftEdge = obj2.x - obj2.width / 2;
    if (rightEdge >= leftEdge)
      return (true);
    else
      return (false);
  }