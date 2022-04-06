import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState={
    items:[],
    item:{}
}
// eslint-disable-next-line no-use-before-define
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state= initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            break;
            case NEW_POST:
                break
        default:return state;
    }

}