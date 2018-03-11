import { channel, delay } from 'redux-saga';
import { take, fork, call, put, select, race } from 'redux-saga/effects';
import { v1 as uuid } from 'uuid';
import Actions from '../actions/queue';

function* watchRequests() {
  // create a channel to queue incoming requests
  const chan = yield call(channel);
  const workerThreads = 1;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < workerThreads; i++) {
    yield fork(handleRequest, chan);
  }

  while (true) {
    const { payload } = yield take('API_REQUEST');
    yield put(chan, payload);
  }
}

export function* queueRequest(endpoint, data) {
  const requestId = uuid();
  yield put(
    Actions.apiQueueAdd({ requestId, stamp: new Date(), status: 'Pending' })
  );
  yield put({ type: 'API_REQUEST', payload: { requestId, endpoint, data } });
  return requestId;
}

function* handleRequest(chan) {
  while (true) {
    const { requestId, endpoint, data } = yield take(chan);

    yield put(Actions.apiQueueUpdate({ requestId, status: 'Processing' }));
    const apiState = yield select(state => state.api);

    const { response } = yield race({
      response: call(endpoint, apiState, data),
      timeout: call(delay, 1500)
    });

    // process the request
    yield put({ type: 'REQUEST_PROCESSED', requestId });

    if (response) {
      yield put(
        Actions.apiQueueUpdate({
          requestId,
          endStamp: new Date(),
          status: 'Success'
        })
      );
      yield put({ type: `API_RESPONSE_${requestId}`, payload: response });
    } else {
      yield put(
        Actions.apiQueueUpdate({
          requestId,
          endStamp: new Date(),
          status: 'Timeout'
        })
      );
      yield put({
        type: `API_RESPONSE_${requestId}`,
        payload: { error: true, message: 'Operation timed out' }
      });
    }
  }
}

export default watchRequests;
