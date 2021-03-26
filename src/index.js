import HwGridLayout from './hw-grid-layout'
import HwGridItem from './components/hw-grid-item'
import HwViewElement from './components/hw-view-element'
const components = [
    HwGridLayout,
    HwGridItem,
    HwViewElement
]
const install = function(Vue){
    if(install.installed) return
    components.map(component => {
        Vue.component(component.name, component)
    })
}
if(typeof window !== "undefined" && window.Vue){
    install(window.Vue)
}
export default {
    install
}
export {
    HwGridLayout,
    HwGridItem,
    HwViewElement
}
