## radio单选框的使用

### 一、直接单个使用

```vue
<view>
	<label class="radio" @click="radioChange(0)"><radio value="0" :checked="gender===0" />男</label>
	<label class="radio" @click="radioChange(1)"><radio value="1" :checked="gender===1"/>女</label>
</view>
```

```vue
<script>
export default {
    data() {
        return {
            gender:0
        }
    },
    methods: {
        radioChange(e) {
           this.gender = e;
        }
    }
}
</script>
```



### 二、用for循环radio

```vue
<radio-group @change="radioChange">
		<label v-for="(item, index) in items" :key="item.value">
			<view>
				<radio :value="item.value" :checked="index === gender" />
			</view>
		<view>{{item.name}}</view>
	</label>
</radio-group>
```

```vue
<script>
export default {
    data() {
        return {
            items: [{
                    value: '0',
                    name: '男'
                },
                {
                    value: '1',
                    name: '女'
                }
            ],
            gender:0
        }
    },
    methods: {
        radioChange(e) {
           this.gender = e.target.value;
        }
    }
}
</script>
```

