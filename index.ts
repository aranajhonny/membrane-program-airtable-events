// `nodes` contain any nodes you add from the graph (dependencies)
// `root` is a reference to this program's root node
// `state` is an object that persists across program updates. Store data here.
import { nodes, root, state } from "membrane";

export async function setup() {
  await nodes.table.changed.$subscribe(root.handler);
}

export async function remove() {
  await nodes.table.changed.$unsubscribe();
}

export async function handler({ event }) {
  const fields = await event.record.fields;
  console.log(JSON.stringify(fields, null, 2));
}
