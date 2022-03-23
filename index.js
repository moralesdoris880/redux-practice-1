const initialWagonState ={
  supplies: 100,
  distance:   0,
  days:       0
}

const gameReducer = (state = initialWagonState, action)=>{
  switch(action.type){
    case 'gather':{
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1 
      };
    }
    case 'travel':{
      return {
        ...state,
        supplies: state.supplies > 0? state.supplies : state.supplies-(20*action.payload),
        distance: state.distance+(10*action.payload),
        days: state.days+action.payload
      }
    }
    case 'tippedWagon':{
    return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1
      }
    }
    default: {
      return state;
    }
  }
}

let wagon = {
  supplies: 100,
  distance: 0,
  days: 0
}

const travelAction = {
  type: 'travel',
  payload: 1
}
wagon = (gameReducer(wagon,travelAction))

const gatherAction = {
  type: 'gather'
}
wagon = (gameReducer(wagon,gatherAction))

const tippedWagonAction = {
  type: 'tippedWagon'
}
wagon = (gameReducer(wagon,tippedWagonAction))

const travelAction2 = {
  type: 'travel',
  payload: 3
}
wagon = console.log(gameReducer(wagon,travelAction2))
