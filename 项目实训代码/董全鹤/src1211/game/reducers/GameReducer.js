const INIT_GAME = 'INIT_GAME'
const NEXT_GAME = 'NEXT_GAME'

export default function(state, action){
  if (!state) {
    state = {
      stage: 1,
      num: Math.ceil(Math.random() * 4)
    }
  }
  switch(action.type){
    case INIT_GAME:
      return {stage: state.stage, num: state.num}
    case NEXT_GAME:
      if (state.stage < 5) {
        return {stage: state.stage + 1, num: Math.ceil(Math.random() * 4)}
      }else{
        return {stage: 'over'}
      }
    default:
      return state
  }
}

export const initGame = () => {
  return {type: INIT_GAME}
}
export const nextGame = () => {
  return {type: NEXT_GAME}
}