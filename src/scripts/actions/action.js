/**
 * Created by vlad on 24.04.16.
 */
const SET_FONT_SIZE = 'SET_FONT_SIZE';
const setFontSize = function () {
    return ({
        type: SET_FONT_SIZE
    })
};
const SHOW_IMAGES = 'SHOW_IMAGES';
const showImages = function(){
    return ({
        type: SHOW_IMAGES
    })
};
const SET_COLOR = 'SET_COLOR';
const setColor = function(color){
    return ({
        type: SET_COLOR,
        payload: color
    })
};
const SHOW_ASK_FORM = 'SHOW_ASK_FORM';
const showAskForm = function(){
  return ({
      type: SHOW_ASK_FORM
  })
};
const CHANGE_ROUTE = 'CHANGE_ROUTE';
const changeRoute = function(route){
    return ({
        type: CHANGE_ROUTE,
        payload: route
    })
}

module.exports = {
    SET_FONT_SIZE,
    SHOW_IMAGES,
    SET_COLOR,
    SHOW_ASK_FORM,
    CHANGE_ROUTE,
    setFontSize,
    showImages,
    setColor,
    showAskForm,
    changeRoute

};