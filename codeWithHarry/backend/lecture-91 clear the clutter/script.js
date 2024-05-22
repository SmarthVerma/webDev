import fs from "fs/promises";
import fsn from "fs";
import path from "path";


const basepath = "C:\\Users\\smarth verma\\Desktop\\webDev\\codeWithHarry\\backend\\lecture-91 clear the clutter\\clutter"

const files = await fs.readdir(basepath);

for (const item of files) {
    let ext = item.split(".").pop(); // Get the file extension

    // Check if the file extension is not "js" or "json" and the file has an extension
    if (ext !== "js" && ext !== "json" && item.includes(".")) {
        const extDir = path.join(basepath, ext);

        // Check if the directory for the file extension exists
        if (!fsn.existsSync(extDir)) {
            // If not, create the directory
            await fs.mkdir(extDir);
        }

        // Move the file to the directory for its extension
        await fs.rename(path.join(basepath, item), path.join(extDir, item));
    }
}

