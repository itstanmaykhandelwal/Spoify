export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // REMOVE After finish Developing
    // token:"BQAsXy8d9UGZhzIr9N2bb2N0OerWgdaOgDWXnjNaGOTTNWxlWExos8X1X5nWO_aG1Gtdg08Eegvgd5iEGISkMsICUwUy46JXRPdYT9X7dvzDrIZydTzswPt9KRn6rTqdEkQD_f1uCMdrKABvWTIi5rggQFI3w0zFr-9OTSB-EE6ERds8ITDd",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
            case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            };
            case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists     
            }
            case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly,
                
            }
                
            default:
                return state;
    }

}

export default reducer;
