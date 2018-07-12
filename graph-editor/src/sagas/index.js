import { all, takeEvery, call, put } from 'redux-saga/effects'
import { get, post } from '../services/webService'
import { addNode,addNodeToDBError } from '../actions/mainButtonAction';


function* rootSaga() {
    return all([
        takeEvery('ADD_NODE_TO_DB', addNodeToDB),
        takeEvery('ADD_EDGE_TO_DB', addEdgeToDB),
        takeEvery('GET_NODES_FROM_DB', getNodesFromDB),
        takeEvery('GET_EDGES_FROM_DB', getEdgesFromDB),
        takeEvery('UPDATE_NODE_TO_DB', updateNodeToDB),
        takeEvery('UPDATE_EDGE_TO_DB', updateEdgeToDB),
        takeEvery('DELETE_NODE_TO_DB', deleteNodeFromDB),
        takeEvery('DELETE_EDGE_TO_DB', deleteEdgeFromDB)
    ])
}

function* addNodeToDB(newNode) {
    try {
        yield call(post, 'http://google.co.th/nodes', newNode);
        yield put(addNode(newNode));
    } catch(error) {        
         yield put(addNodeToDBError(error));
    }
}

function* addEdgeToDB(newEdge) {

}

function* getNodesFromDB() {
    try{
    // const response = yield call (get,'http://google/co.th'/nodes)
    } catch(error) {

    }
    yield
}

function* getEdgesFromDB() {

}

function* updateNodeToDB() {

}

function* updateEdgeToDB() {

}

function* deleteNodeFromDB() {

}

function* deleteEdgeFromDB() {

}

export { rootSaga }