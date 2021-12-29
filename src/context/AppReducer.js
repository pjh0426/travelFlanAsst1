export default (state, action) => {
    switch(action.type) {
    case 'ADD_ITEM':
        return {
            albumList: [...state.albumList, action.payload]
        }
    case 'REMOVE_ITEM':
        return {
            albumList: state.albumList.filter(item => item.id !== action.payload)
        }
    case 'UPDATE_ITEM':{
        const updatedAlbum = action.payload;
        const updatedAlbums = state.albumList.map(item => {
            if(item.id == updatedAlbum.id){
                return updatedAlbum;
            }
            return item;
        });
        return {
            albumList: updatedAlbums
        }
    }
    default:
        return state;
    }
}