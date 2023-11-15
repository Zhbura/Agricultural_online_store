export const CHANGE_MENU_SHOW = 'MENU::CHANGE_MENU_SHOW';

export const changeMenuShow = (changeShow) => ({
    type: CHANGE_MENU_SHOW,
    payload: {
        changeShow
    },
})