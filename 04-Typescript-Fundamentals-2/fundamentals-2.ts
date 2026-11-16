
function describe(assignee: string | null): string {
  if (assignee === null) {
    return "asdsa";
  }
  // here TypeScript knows: assignee is string
  return assignee.toUpperCase();
}


for (let i = 1; i <= 5; i++) {
  console.log(`Creating request ${i} of 5`);
}
