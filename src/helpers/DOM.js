/**
 * 是否有window
 * @return {boolean}
 */
function hasWindow(){
    return (typeof window !== 'undefined')
}

/**
 * 添加事件监听
 * @param {Array} event
 * @param callback
 */
export function addWindowEventListener(event, callback){
    if(!hasWindow){
        callback()
        return;
    }
    window.addEventListener(event, callback)
}

/**
 * 移除事件监听
 * @param event
 * @param callback
 */
export function removeWindowEventListener(event, callback) {
    if(!hasWindow()){
        return;
    }
    window.removeEventListener(event, callback)
}
