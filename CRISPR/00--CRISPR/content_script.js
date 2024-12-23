let extensions;
chrome.management.getAll((results) => {
    extensions = results;
    init();
    console.log(extensions);
});
function toggleExtension(id) {
    if (extensions) {
        let ext = extensions.find(ext => ext.id === id);
        if (ext) {
            chrome.management.setEnabled(
                id,
                !ext.enabled,
                () => chrome.management.getAll(results => extensions = results)
            );
        }
    }
}
function init() {
    // make list html
    extensionsList.innerHTML = extensions
        .filter(ext => ext.mayDisable && ext.name !== "Chrome Extensions Disabler")
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(ext =>
            `<div class="row">
		<label>
			<input class="apple-switch" type="checkbox" ${ext.enabled ? "checked" : ""} data-id="${ext.id}" /> ${ext.name} <span class="version">${ext.version}</span>
		</label>
	</div>`)
        .join("") + `
	<br/>
	`;
    // on checkbox input, toggle enabled state
    [...document.querySelectorAll("input[type='checkbox']")].forEach(cb =>
        cb.oninput = () => toggleExtension(cb.dataset.id)
    );


    document.getElementById("reload").addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                const tabId = tabs[0].id;
                chrome.scripting.executeScript({
                    target: { tabId: tabId },
                    func: () => window.location.reload()
                });
            }
        });
    });


    // document.querySelector("#extLink")
    //     .onclick = () => {
    //         chrome.tabs.create({
    //             url: 'chrome://extensions'
    //         });
    //     }
}



