const getnodeid = (eventNodeID) => ({
    type: 'GETNODEID',
    payload:eventNodeID
})
const getedgeid = (EdgeID) => ({
    type: 'GETEDGEID',
    payload:EdgeID
})
const getnodeclass = (NodeClass) => ({
    type: 'GETNODECLASS',
    payload:NodeClass
})
const getnodename = (NodeName) => ({
    type: 'GETNODENAME',
    payload:NodeName
})

const getedgeclass = (EdgeClass) => ({
    type: 'GETEDGECLASS',
    payload:EdgeClass
})
const getinrelation = (InRelation) => ({
    type: 'GETINRELATION',
    payload:InRelation
})
const getoutrelation =(OutRelation) => ({
    type: 'GETOUTRELATION',
    payload:OutRelation
})
const updategraph = (newNode,newEdge) => ({
    type: 'UPDATEGRAPH',
    payload1:newNode,
    payload2:newEdge
})


export {
    getnodeid,
    getnodeclass,
    getnodename,
    getedgeid,
    getedgeclass,
    getinrelation,
    getoutrelation,
    
    updategraph
}
