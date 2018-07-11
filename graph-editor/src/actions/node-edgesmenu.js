const shownodemenu = () => ({
    type: 'SHOWNODEMENU',
    
})
const hidenodemenu = () => ({
    type: 'HIDENODEMENU',
})
const showedgemenu = () => ({
    type: 'SHOWEDGEMENU',
})
const hideedgemenu = () => ({
    type: 'HIDEEDGEMENU',
})
const changesizes = (nodeID,sizes)=>({
    type: 'EDITSIZE',
    nodeid: nodeID,
    size:sizes
})
const changecolornode = (nodeID,color)=>({
    type:'CHANGE_COLOR_NODE',
    nodeid: nodeID,
    color:color
})

export {
    shownodemenu,
    hidenodemenu,
    showedgemenu,
    hideedgemenu,
    changesizes,
    changecolornode,
}