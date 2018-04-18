export function selectTab(tabId) { // Tem que passar um parâmetro exemplo o target
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds) { // Operador Spread para passar vários parâmetros
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true) // Cada elemento das abas [e], se for true vão ser visíveis
        return {
            type: 'TAB_SHOWED',
            payload: tabsToShow
        }
}