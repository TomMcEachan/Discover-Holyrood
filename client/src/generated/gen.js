import "./register_types"

export const needle_exported_files = [];
globalThis["needle:codegen_files"] = needle_exported_files;
needle_exported_files.push("./assets/mainScene.glb?v=1686584422664");

document.addEventListener("DOMContentLoaded", () =>
{
	const needleEngine = document.querySelector("needle-engine");
	if(needleEngine && needleEngine.getAttribute("src") === null)
	{
		needleEngine.setAttribute("hash", "1686584422664");
		needleEngine.setAttribute("src", JSON.stringify(needle_exported_files));
	}
});

console.log("Made\ with\ ♥\ by\ 🌵\ Needle\ -\ https://needle\.tools\ —\ Version\ 3\.6\.5");
