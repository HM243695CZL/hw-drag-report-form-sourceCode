<template>
    <div id="app">
        <hw-grid-layout
            :layout.sync="layout"
            :col-num="parseInt(colNum)"
            :row-height="parseInt(rowHeight)"
            :is-draggable="draggable"
            :is-resizable="resizable"
            :prevent-collision="preventCollision"
            :vertical-compact="true"
            :use-css-transforms="true"
            :responsive="responsive"
            @layout-created="layoutCreatedEvent"
            @layout-before-mount="layoutBeforeMountEvent"
            @layout-mounted="layoutMountedEvent"
            @layout-ready="layoutReadyEvent"
            @layout-updated="layoutUpdatedEvent"
        >
            <hw-grid-item
                v-for="item in layout"
                :key="item.i"
                :static="item.static"
                :x="item.x"
                :y="item.y"
                :w="item.w"
                :h="item.h"
                :i="item.i"
                @resize="resize"
                @move="move"
                @resized="resized"
                @moved="moved"
            >
                <hw-view-element :text="item.i">
                   hm243695czl
                </hw-view-element>
            </hw-grid-item>
        </hw-grid-layout>
    </div>
</template>

<script>
    let testLayout = [
        {x: 0, y: 0, w: 10, h: 1, i: '9b1deb4d-3b7d', resizable: true, draggable: true, static: false},
    ]
    export default {
        name: 'App',
        components: {},
        data() {
            return {
                layout: testLayout,
                draggable: true,
                resizable: true,
                responsive: true,
                preventCollision: false,
                rowHeight: 100,
                colNum: 100,
                index: 0,
                operateItem: ['可拖动', '可调整大小', '响应式']
            }
        },
        mounted(){
            this.index = this.layout.length
        },
        methods: {
            move(i, newX, newY){
                console.log('MOVE i=' + i + ', X=' + newX + ', Y=' + newY);
            },
            resize(i, newH, newW, newHPx, newWPx){
                console.log('RESIZE i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx);
            },
            moved(i, newX, newY){
                console.log('### MOVED i=' + i + ', X=' + newX + ', Y=' + newY);
            },
            resized(i, newH, newW, newHPx, newWPx){
                console.log('### RESIZED i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx);
            },
            layoutCreatedEvent(newLayout){
                console.log('Created layout: ', newLayout);
            },
            layoutBeforeMountEvent(newLayout){
                console.log('beforeMount layout: ', newLayout);
            },
            layoutMountedEvent(newLayout){
                console.log('Mounted layout: ', newLayout);
            },
            layoutReadyEvent(newLayout){
                console.log('Ready layout: ', newLayout);
            },
            layoutUpdatedEvent(newLayout){
                console.log('Updated layout: ', newLayout);
            }
        }
    }
</script>

<style lang="less">
    #app{
        padding: 8px;
    }
</style>
