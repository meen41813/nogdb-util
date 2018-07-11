const addnode = (newnode) => ({
    type: 'ADDNODEACTION',
    payload:newnode
})
const clearcanvas = (nullcanvas) => ({
    type: 'CLEARCANVAS',
    payload:nullcanvas
})
const fullscreen =() => ({
    type: 'SETFULLSCREEN',
})
const exitfullscreen =() => ({
    type: 'EXITFULLSCREEN'
})


export {
    addnode,
    clearcanvas,
    fullscreen,
    exitfullscreen
}