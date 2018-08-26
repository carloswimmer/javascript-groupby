<template>
    <div class="container top">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in productsGrouped" :key="productsGrouped.indexOf(product)">
                    <td>{{ product.name }}</td>
                    <td>{{ product.value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    name: 'bicycle',
                    value: 200
                },
                {
                    name: 'bicycle',
                    value: 600
                },{
                    name: 'tent',
                    value: 1300
                },{
                    name: 'tent',
                    value: 1200
                },{
                    name: 'surfboard',
                    value: 310
                },{
                    name: 'surfboard',
                    value: 800
                },
            ]
        }
    },
    computed: {
        productsGrouped() {
            return this.groupBy(this.products, 'name', 'value')
        }
    },
    methods: {
        groupBy(array, prop, sum) {
            let grouped = []
            array.forEach(element => {
                if (!grouped.find(item => item[prop] === element[prop])) {
                    let obj = {[prop]: element[prop]}
                    grouped.push(obj)
                }
            })
            grouped.forEach(element => {
                let values = []
                values = array.filter(item => item[prop] === element[prop])
                values.reduce((prev, item) => element[sum] = prev + item[sum], 0)
            })
            return grouped
        }
    }
}
</script>

<style scoped>
.top {
    margin-top: 60px;
}
</style>
