/**
 * Created by dcpai on 2017/7/3.
 */
export const increment = ({commit}) => commit('increment');
export const incrementIfOdd = ({commit, state}) => {
  if ((state.count + 1) % 2 === 0) {
    commit('increment');
  }
};
