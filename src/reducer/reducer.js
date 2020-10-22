export const initialState = {
    spotify: null,
    discover_weekly: null,
    token:null,
    //token: 'BQDMt83ecsPFVzC5IRLpUYi2cMn4i6uApTGYRbbLW7cCEJRfQM_ltmmWwgCAzjliqnU43Re-KhdYpXuUE5pkGsgvt5PXuKofD2a1rdlm1esxswh2rZzCgTTFDe1W4Cd_SeIjRIcAIOAx0WdaF_liPAhwgugFIK7o_tRMpeMizPq8PQ40',
    user: null,
    playlist: []
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'SET_SPOTIFY':
            return {
                ...state,
                spotify: action.spotify
            };
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
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };
        default:
            return state;
    }
}

export default reducer;