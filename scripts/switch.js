const path = require("path");
const fs = require("fs");
const clack = require("@clack/prompts");
const align = require("./align-configs");

const src = path.join(__dirname, "..", "src");
const dirs = fs.readdirSync(src);
const days = [];

dirs.forEach((dir) => {
    if (dir.startsWith("day"))
        days.push({
            value: dir,
            label: dir.replace("day", ""),
        });
});

async function main() {
    const day_name = await clack.select({
        message: "Pick a day to switch",
        options: days,
    });

    align.jest(day_name);
    align.ts_config(day_name);
    align.package_json(null, day_name);
}

main();
