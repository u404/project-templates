const delay = ms => new Promise((resolve) => {
  setTimeout(() => resolve(), ms)
})

export default {
  namespace: "user",
  state: {},
  reducers: {
    set(state, { payload = {} }) { return payload },
  },
  effects: {
    * login(action, { call, put }) {
      yield call(delay, 1000)
      yield put({ type: "add" })
    },
  },
}
