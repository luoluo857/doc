## echarts地图、散点、飞线

效果图：

![](https://vitepress.oss-cn-guangzhou.aliyuncs.com/china.jpg)

第一步先安装吧

```js
npm install echarts
```

第二步引入

```js
import * as echarts from 'echarts'
```

地图首先要有地图的数据，这里取下载地图的json数据：http://datav.aliyun.com/portal/school/atlas/area_selector#&lat=30.332329214580188&lng=106.72278672066881&zoom=3.5

这是中国地图的json数据

```js
import china from "@/assets/china.json"
```

整体代码

```js
<template>
    <div class="china_data">
        <div ref="myChart" id="myChart"></div>
    </div>
</template>

<script>
import china from "@/assets/china.json"
export default {
    data() {
        return {
            mapData:{}
        }
    },
    mounted() {
        this.drawChart()
    },
    methods: {
        drawChart() {
            let myChart = this.$echarts.init(this.$refs.myChart);
            // 散点图数据
            var data = [{name: "北京",value: [116.24, 39.55, 100]},
                        {name: "深圳",value: [114.271522, 22.753644]},
                        {name: "重庆",value: [106.54, 29.59]},
                        {name: "浙江",value: [120.19, 30.26]},
                        {name: "上海",value: [121.4648, 31.2891]},
                        {name: "佛山",value: [112.877162, 23.160295]}]
			//飞线数据
            let LineData = [
	                {
	                    'fromName': '北京',
	                    'toName': '深圳',
	                    'coords': [[116.24, 39.55],[114.271522, 22.753644]],//主要是这个数据
	                    value: 100
	                },
                    {
	                    'fromName': '北京',
	                    'toName': '重庆',
	                    'coords': [[116.24, 39.55],[106.54, 29.59]],
	                    value: 100
	                },
                    {
	                    'fromName': '上海',
	                    'toName': '深圳',
	                    'coords': [[121.4648, 31.2891],[114.271522, 22.753644]],
	                    value: 100
	                },
                    {
	                    'fromName': '北京',
	                    'toName': '佛山',
	                    'coords': [[116.24, 39.55],[112.877162, 23.160295]],
	                    value: 100
	                }
	            ]
            
            this.$echarts.registerMap('china', china)
            let option = {
				//地图
                geo: {
                    type: 'map',
                    map: 'china',
                    zoom: 1.7,
                    top: "30%",
                    roam:'scale',
                    label: {
                        normal: {
                            show: true, //省份名展示
                            fontSize: "10", //省份字体大小
                            color: "white", //省份字体颜色
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: "white", //鼠标移入省份字体颜色变化
                                fontSize: "14px", //鼠标移入省份字体大小变化
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            borderColor: "#31FFFF", //地图边框颜色
                            areaColor: "#306eb4", //地图背景颜色
                            borderWidth: 2, //设置外层边框
                            shadowColor: '#276fce',
                            shadowOffsetX: 0,
                            shadowOffsetY: 10,
                            opacity: 1,
                        },
                        emphasis: {
                            // show: true,
                            areaColor: "red", //鼠标放到地图上显示的颜色
                            shadowOffsetX: 0,
                            shadowOffsetY: 10,
                            shadowBlur: 0,
                            borderWidth: 0,
                            opacity: 1,
                            // shadowColor: "#fff",
                        },
                    },
                },
                series: [
                    // 区域散点图
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        symbolSize: 10,
                        rippleEffect: { //坐标点动画
                            period: 3,
                            scale: 5,
                            brushType: 'fill'
                        },
                        data: data,
                        itemStyle: { //坐标点颜色
                            normal: {
                                show: true,
                                color: '#31FFFF',
                                shadowBlur: 20,
                                shadowColor: '#fff'
                            },
                            emphasis: {
                                areaColor: '#f00'
                            }
                        },

                    },
                    //飞线图
                    {
                        type: 'lines',
                        zlevel: 2,
                        effect: {
                            show: true,
                            //飞机的速度  这里是s单位
                            period: 6,
                            trailLength: 0,
                            symbol: 'circle',//这是圆点替换了飞机
                            // 飞机大小
                            symbolSize: 16,
                            color:'#31FFFF',
                        },
                        lineStyle: {
                            normal: {
                                color:'#fff',
                                type:'solid', // 虚线
                                // 线条宽度
                                width: 2,
                                opacity: 1,
                                curveness: 0.2, // 弯曲度
                            },
                            emphasis: {
                                color: '#FF9600' //飞线悬浮颜色
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'middle',
                                formatter: '{b}'
                            }
                        },
                        data: LineData
                    }
                   
                ],


            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
           
        }
    }
}
</script>

<style lang="less" scoped>
.china_data {
    width: 737px;
    height: 500px;

    #myChart {
        width: 700px;
        height: 480px;
    }
}
</style>
```

