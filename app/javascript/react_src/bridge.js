
function getInjectedData() {
    const injectedData = document.getElementById("injected-data-init").dataset
    return injectedData;
}

function getLiveId() {
    return getInjectedData().liveId
}

export {getInjectedData, getLiveId}