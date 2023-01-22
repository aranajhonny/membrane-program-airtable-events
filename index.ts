// `nodes` contain any nodes you add from the graph (dependencies)
// `root` is a reference to this program's root node
// `state` is an object that persists across program updates. Store data here.
import { nodes, root, state } from "membrane";

export async function setup() {
  nodes.table.changed.$subscribe(root.handler);
  console.log("subscribed to events");
}

export async function handler({ event }) {
  const fields = await event.record.fields.$get();
  console.log(event.type);
  console.log(JSON.stringify(fields, null, 2));
}
