chrome.action.onClicked.addListener(() => {
  handleActionClicked()
});

async function handleActionClicked() {
  const tab = await getCurrentTab()
  const tabId = tab.id

  chrome.scripting.executeScript({
    target: {
      tabId,
    },
    files: ['base-layers.js']
  });
}

async function getCurrentTab() {
  const tabs = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  })

  return tabs[0]
}
