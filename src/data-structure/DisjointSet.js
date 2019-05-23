function DisjointSet(n) {
  this.parent = []
  this.rank = []
  this.init(n)
}

DisjointSet.prototype.init = function(n) {
  for (let i = 0; i < n; i++) {
    this.rank.push(0);
    this.parent.push(i);
  }
}

// return root
DisjointSet.prototype.find = function(x) {
  if (x == parent[x]){
    return x
  } else {
    return find(parent[x])
  }
}

// union two sets to one
DisjointSet.prototype.union = function (x, y) {
  x = find(x)
  y = find(y)
  if (x == y) {
    return
  } else {
    if (rank[x] > rank[y]) {
      parent[y] = x
    } else {
      parent[x] = y

      if (rank[x] == rank[y]) rank[y]++
    }
  }

}

// is same
DisjointSet.prototype.same = function(x,y) {
  return find(x) == find(y)
}