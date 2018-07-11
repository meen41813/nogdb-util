const removenode = (NodeID)=>({
    type: 'REMOVE_NODE',
    payload: NodeID
})

export {removenode}