class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }
  get(key) {
    const index = this.hash(key);
    return this.table[index] || "Key doesnt exist";
  }
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log("key: ", i, "Value: ", this.table[i]);
      }
    }
  }
}
const table = new HashTable(50);

table.set("name", "Adithya");
table.set("age", 21);
table.set("pet", "none");
table.set("house", "edapally");

console.log(table.get("name"));
// table.display()
table.set("name", "rameez");

table.display();
