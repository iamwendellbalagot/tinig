export const initialState = {
    token:null,
    //token: 'BQDMt83ecsPFVzC5IRLpUYi2cMn4i6uApTGYRbbLW7cCEJRfQM_ltmmWwgCAzjliqnU43Re-KhdYpXuUE5pkGsgvt5PXuKofD2a1rdlm1esxswh2rZzCgTTFDe1W4Cd_SeIjRIcAIOAx0WdaF_liPAhwgugFIK7o_tRMpeMizPq8PQ40',
    user: null,
    playlist: []
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlist: action.playlist
            };
        default:
            return state;
    }
}

export default reducer;