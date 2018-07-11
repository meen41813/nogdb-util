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
const addnodetodberror =() => ({
        type: 'ADDNODE_DBERROR'
    })


export {
    addnode,
    clearcanvas,
    fullscreen,
    exitfullscreen,
    addnodetodberror
}