import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            { id: 1, name: 'リンゴ', price: 150, quantity: 0 },
            { id: 2, name: 'バナナ', price: 120, quantity: 0 },
            { id: 3, name: 'みかん', price: 100, quantity: 0 }
        ]
    },
    // 合計金額を計算するgetter
    getters: {
        totalPrice(state) {
            // state.products にある全商品の合計金額を計算
            return state.products.reduce((sum, item) => {
            // 各商品の「価格 × 数量」を加算していく    
            return sum + (item.price * item.quantity);
            }, 0);
        }
    },
    
    // 商品をカートに追加するmutation（数量を1つ増やす）
    mutations: {
        addToCart(state, product) {

            // state.productsの中から、product.idと同じIDを持つ商品pを探し、見つかればitemに代入
            const item = state.products.find(p => p.id === product.id);

            // 該当商品の quantity を1つカウントアップ
            if (item) {
                item.quantity++;
            }
        },
        // 商品の数量をリセットするmutation
        clearCart(state) {
            
            // state.products のすべての商品を1つずつ取り出して0にリセット
            state.products.forEach(item => {item.quantity = 0;});
        }
    },

    // 商品購入処理をの非同期action
    actions: {
        
        // PromiseとsetTimeoutを使って3秒間待機
        async purchaseItems({ commit }) {
            await new Promise(resolve => setTimeout(resolve, 3000));

            // 3秒後、商品数量を初期化処理を実行
            commit('clearCart');
        }
    },
    modules: {
    }
})