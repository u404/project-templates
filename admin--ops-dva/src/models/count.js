const delay = ms => new Promise((resolve) => {
  setTimeout(() => resolve(), ms)
})

export default {
  namespace: "count",
  state: 0,
  reducers: {
    add(count) { return count + 1 },
    minus(count) { return count - 1 },
  },
  effects: {
    * addAfter1Second(action, { call, put }) {
      yield call(delay, 1000)
      yield put({ type: "add" })
    },
  },
}
