import execa from "execa";
import path from "path";
import globby from "globby";

async function main() 
{
  const benchmarks = await globby("./src/packages/**/*.bench.ts", {
    gitignore: true,
  });
  await run(benchmarks);
}

async function run(benchmarks: string[]) 
{
  for (const location of benchmarks) 
  {
    await execa.command(`yarn ts-node ${location}`, {
      cwd: path.join(__dirname, `..`),
      stdio: "inherit",
    });
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
