const path = require("path");
const fs = require("fs");
const clack = require("@clack/prompts");
const align = require("./align-configs");

const src = path.join(__dirname, "..", "src");
const daySrc = path.join(__dirname, "..", "tsconfig.json");
const latest = JSON.parse(fs.readFileSync(daySrc))["compilerOptions"]["paths"][
    "@code/*"
][0].split("/")[0];

const dirs = fs.readdirSync(src);
const days = [];

dirs.forEach((dir) => {
    if (dir.startsWith("day") && dir !== latest)
        days.push({
            value: dir,
            label: dir.replace("day", ""),
        });
});

async function main() {
    const day_name = await clack.select({
        message: "Pick a day to regenrate",
        options: days,
    });

    const old = path.join(src, day_name);
    const n = path.join(src, latest);

    console.log(old, n);
    
    fs.rmSync(old, { recursive: true });
    fs.mkdirSync(old);
    
    const files = fs.readdirSync(n);
    
    files.forEach(file => {
        fs.copyFileSync(path.join(n, file), path.join(old, file));
    })

    fs.rmSync(n, { recursive: true });

    align.jest(day_name);
    align.ts_config(day_name);
    align.package_json(null, day_name);
}

main();
